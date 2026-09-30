import { Link } from "react-router";

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  children,
  ...props
}) {
  const classes = [
    "ui-button",
    variant === "outline" ? "ui-button-outline" : "ui-button-primary",
    size === "sm" ? "!px-4 !text-xs" : "",
    "disabled:cursor-not-allowed disabled:opacity-50",
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