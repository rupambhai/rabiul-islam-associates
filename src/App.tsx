import { ThemeProvider } from "@/context/ThemeContext";
import { AppRouter } from "@/routes";

/** Top-level providers wrapping the router. */
export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}
