import { Link } from "react-router";

const variants = {
  primary: "bg-cta text-white hover:bg-cta-hover",
  outline: "border border-line text-ink hover:bg-surface",
};

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  ...props
}) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2",
    "rounded-md font-semibold transition-colors",
    "disabled:cursor-not-allowed disabled:opacity-50",
    size === "sm" ? "px-4 py-2.5 text-sm" : "px-6 py-3 text-sm",
    variants[variant] ?? variants.primary,
    className,
  ].join(" ");

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}