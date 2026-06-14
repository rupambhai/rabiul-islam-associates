import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "theme";

/**
 * Theme switching is intentionally disabled for now: the chamber's brand is
 * locked to the light (daylight) palette. The provider, context and toggle
 * remain in place so dark mode can be re-enabled later by flipping
 * THEME_SWITCHING_ENABLED and restoring the toggle in the navbar.
 */
const THEME_SWITCHING_ENABLED = false;

/** Resolve the initial theme. Forced to light while switching is disabled. */
function getInitialTheme(): Theme {
  if (!THEME_SWITCHING_ENABLED || typeof window === "undefined") return "light";
  return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Keep the <html> class (and stored preference) in sync with state.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    if (THEME_SWITCHING_ENABLED) {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const toggleTheme = useCallback(
    () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
