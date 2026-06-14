import { useId, type ReactNode } from "react";

interface FieldShellProps {
  label: string;
  error?: string;
  required?: boolean;
  /** Render-prop receives the id/aria props to spread onto the control. */
  children: (props: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby"?: string;
    "aria-required"?: boolean;
  }) => ReactNode;
}

/**
 * Accessible field wrapper: associates a label, marks invalid state and links
 * the error message via aria-describedby. Shared by inputs, selects and
 * textareas so validation behaviour stays consistent.
 */
export function Field({ label, error, required, children }: FieldShellProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-widest text-charcoal"
      >
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        "aria-required": required || undefined,
      })}
      {error && (
        <p id={errorId} className="text-xs text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
