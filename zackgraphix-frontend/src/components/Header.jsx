import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link, useLocation } from "react-router";
import { Menu as MenuIcon, X, ChevronDown, Sun, Moon } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import useTheme from "../hooks/useTheme";
import { roles } from "../data/site";

const links = [
  ["Opportunities", "opportunities"],
  ["Hire talent", "hire"],
  ["How it works", "how"],
  ["Resources", "resources"],
  ["About", "community"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { isDark, toggle } = useTheme();
  const anchor = (id) => pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-canvas">
        <Container className="flex min-h-20 items-center justify-between gap-3">
          <Link to="/" className="font-heading text-xl font-bold tracking-tight">
            Zack<span className="text-sage">grafix</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
            <Menu>
              <MenuButton className="flex min-h-11 items-center gap-1 text-sm font-semibold">
                Talent <ChevronDown size={14} />
              </MenuButton>
              <MenuItems
                anchor="bottom start"
                className="z-50 mt-2 w-56 rounded-xl border border-line bg-canvas p-2 shadow-lg"
              >
                <MenuItem>
                  <Link to="/talent" className="block rounded-lg px-3 py-3 text-sm data-focus:bg-soft">
                    Browse all talent
                  </Link>
                </MenuItem>
                {roles.map((role) => (
                  <MenuItem key={role.key}>
                    <Link
                      to={`/talent?role=${role.key}`}
                      className="block rounded-lg px-3 py-3 text-sm data-focus:bg-soft"
                    >
                      {role.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            {links.map(([label, id]) => (
              <a key={id} href={anchor(id)} className="text-link font-medium">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={isDark ? "Use light mode" : "Use dark mode"}
              className="grid h-11 w-11 place-items-center rounded-full hover:bg-soft"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button to="/join" size="sm">Join us</Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center xl:hidden"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </Container>
      </header>

      <Dialog open={open} onClose={setOpen} className="relative z-50 xl:hidden">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-canvas p-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="font-heading text-xl font-bold">
              Zackgrafix
            </DialogTitle>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              className="grid h-11 w-11 place-items-center"
            >
              <X size={22} />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mt-6 flex-1 overflow-y-auto">
            <Link to="/talent" onClick={() => setOpen(false)} className="block py-3 font-bold">
              Browse talent
            </Link>
            {roles.map((role) => (
              <Link
                key={role.key}
                to={`/talent?role=${role.key}`}
                onClick={() => setOpen(false)}
                className="block py-2 pl-4 text-sm text-muted"
              >
                {role.name}
              </Link>
            ))}
            {links.map(([label, id]) => (
              <a
                key={id}
                href={anchor(id)}
                onClick={() => setOpen(false)}
                className="block py-3 font-semibold"
              >
                {label}
              </a>
            ))}
          </nav>

          <Button to="/join" onClick={() => setOpen(false)} className="mt-5">
            Join Zackgrafix
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
}