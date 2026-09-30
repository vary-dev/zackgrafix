import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link, useLocation } from "react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import useTheme from "../hooks/useTheme";

const links = [
  { label: "Explore work", id: "work" },
  { label: "Hire talent", id: "hire" },
  { label: "How it works", id: "how" },
];

export default function Header() {
  const { pathname } = useLocation();
  const { isDark, toggle } = useTheme();
  const sectionHref = (id) => pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-40 border-b border-line bg-canvas"
    >
      {({ open, close }) => (
        <>
          <Container className="flex min-h-20 items-center justify-between gap-3">
            <Link
              to="/"
              aria-label="Zackgrafix home"
              className="font-heading text-xl font-bold tracking-tight sm:text-2xl"
            >
              Zack<span className="text-brand">grafix</span>
            </Link>

            <nav aria-label="Main navigation" className="hidden gap-7 md:flex">
              {links.map(({ label, id }) => (
                <a
                  key={id}
                  href={sectionHref(id)}
                  className="py-3 text-sm font-medium transition-colors hover:text-cta"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggle}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="grid h-11 w-11 place-items-center rounded-md hover:bg-surface"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Button to="/join" size="sm">Join us</Button>

              <DisclosureButton className="grid h-11 w-11 place-items-center rounded-md md:hidden">
                <span className="sr-only">
                  {open ? "Close navigation" : "Open navigation"}
                </span>
                {open ? <X size={22} /> : <Menu size={22} />}
              </DisclosureButton>
            </div>
          </Container>

          <DisclosurePanel className="border-t border-line bg-canvas md:hidden">
            <Container>
              <nav aria-label="Mobile navigation" className="grid py-3">
                {links.map(({ label, id }) => (
                  <a
                    key={id}
                    href={sectionHref(id)}
                    onClick={() => close()}
                    className="rounded-md px-3 py-3 text-sm font-medium hover:bg-surface"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </Container>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}