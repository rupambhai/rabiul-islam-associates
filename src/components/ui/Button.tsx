import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

type Variant = "primary" | "outline" | "ghost" | "inverse" | "inverseOutline";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Solid charcoal — primary action.
  primary:
    "bg-charcoal text-ivory hover:bg-charcoal/90 border border-charcoal",
  // Hairline outline — secondary action.
  outline:
    "border border-line text-charcoal hover:border-gold hover:text-gold bg-transparent",
  // Text-only — tertiary.
  ghost: "text-charcoal hover:text-gold bg-transparent",
  // Solid ivory on dark surfaces (e.g. the charcoal CTA band).
  inverse: "bg-ivory text-charcoal hover:bg-ivory/90 border border-ivory",
  // Hairline outline on dark surfaces.
  inverseOutline:
    "border border-ivory/30 text-ivory hover:border-gold hover:text-gold bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-xs uppercase tracking-widest",
  md: "h-12 px-7 text-sm uppercase tracking-widest",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonAsButton
  extends CommonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
}

interface ButtonAsLink extends CommonProps {
  as: "link";
  to: string;
  children: React.ReactNode;
}

interface ButtonAsAnchor extends CommonProps {
  as: "a";
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

/**
 * Polymorphic button: renders a native <button>, a router <Link>, or an
 * <a> depending on the `as` prop, while keeping a single visual API.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = "primary", size = "md", className } = props;
    const classes = cn(base, variants[variant], sizes[size], className);

    if (props.as === "link") {
      const { to, children } = props;
      return (
        <Link to={to} className={classes}>
          {children}
        </Link>
      );
    }

    if (props.as === "a") {
      const { href, children, target, rel, "aria-label": ariaLabel } = props;
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={classes}
        >
          {children}
        </a>
      );
    }

    const { variant: _v, size: _s, className: _c, as: _a, ...rest } = props;
    return <button ref={ref} className={classes} {...rest} />;
  },
);
