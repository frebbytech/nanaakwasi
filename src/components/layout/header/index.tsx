import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import { cn } from "@/utils/cn";
import { navItems, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";

/** Highlights the nav item for the home-page section currently in view. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (!enabled) {
      setActive("");
      return;
    }
    const sections = navItems
      .map((item) => document.getElementById(item.hash))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A section counts as "current" while it crosses the upper-middle of the viewport.
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

const linkClass = (current: boolean) =>
  cn(
    "rounded-control px-3 py-2 text-sm font-medium transition-colors duration-150",
    current ? "text-accent" : "text-muted hover:text-fg"
  );

function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome);

  // Close the menu after any navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // Escape closes the menu and returns focus to its button; leaving the
  // mobile breakpoint closes it so it can't linger invisibly.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="rounded-control font-display text-lg font-bold tracking-tight text-fg"
          aria-label={`${site.name}, home`}
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to={{ pathname: "/", hash: `#${item.hash}` }}
                  aria-current={active === item.hash ? "location" : undefined}
                  className={linkClass(active === item.hash)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink to="/#contact" className="hidden sm:inline-flex">
            Start a project
          </ButtonLink>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-control border border-line text-fg transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
      {open && (
        <m.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-bg lg:hidden"
        >
          <Container className="py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.hash} className="border-b border-line last:border-b-0">
                  <Link
                    to={{ pathname: "/", hash: `#${item.hash}` }}
                    className={cn(
                      "flex min-h-12 items-center text-base font-medium",
                      active === item.hash ? "text-accent" : "text-fg"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink to="/#contact" size="lg" className="mt-4 w-full sm:hidden">
              Start a project
            </ButtonLink>
          </Container>
        </m.nav>
      )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
