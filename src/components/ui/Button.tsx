import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { buttonStyles, type ButtonStyleProps } from "./button-styles";

type ButtonProps = ButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

/** A real <button>. Use ButtonLink for navigation. */
export function Button({
  variant,
  size,
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...rest}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = ButtonStyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children: ReactNode;
    /** Internal route (client-side navigation), e.g. "/portfolio" */
    to?: string;
    /** Same-page anchor ("#contact") or external URL */
    href?: string;
  };

/**
 * Renders a router <Link> for `to`, otherwise a plain <a>.
 * External http(s) links open in a new tab with safe rel attributes.
 */
export function ButtonLink({
  variant,
  size,
  className,
  to,
  href,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonStyles({ variant, size, className });

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const isExternal = !!href && /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
