import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Container from "./Container";
import Button from "./Button";

const links = [
  { label: "Explore Work", href: "#projects" },
  { label: "Find Deigners", href: "#designers" },
  { label: "Jobs", href: "#jobs" },
  { label: "How it works", href: "#how" },
];
const Header = () => {
  return (
    <Disclosure
      as="Header"
      className="sticky top-0 z-40 border-b border-line bg-canvas"
    >
      {({ close }) => (
        <>
          <Container className="flex items-center justify-between py-2">
            <a href="#top" aria-label="Zackgraphic home">
              <img
                src="/public/assets/logo.png"
                alt="logo"
                width="56"
                height="56"
                className="h-14 w-14"
              />
            </a>

            <nav
              aria-label="Main"
              className="hidden gap-8 text-[15px] font-medium md:flex"
            >
              {links.map((i) => (
                <a href={i.href} key={i.href} className="hover:text-cta">
                  
                  {i.label}
                </a>
))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#join"
                className="hidden px-2 py-3 text-[15px] font-medium hover:text-cta sm:block"
              >
                Log In
              </a>
              <Button href="#join" size="sm">
                Join Zackgrafix
              </Button>
              <DisclosureButton className="group flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden">
                <span className="sr-only">Menu</span>
                <Bars3Icon
                  className="h-6 w-6 group-data-open:hidden"
                  aria-hidden="true"
                />
                <XMarkIcon
                  className="hidden h-6 w-6 group-data-open:block"
                  aria-hidden="true"
                />
              </DisclosureButton>
            </div>
          </Container>

          <DisclosurePanel className="border-t border-line md:hidden">
<nav aria-label="Mobile" className="flex flex-col p-3">
{[...links,{label:"Log in",href:"#join"}].map((i) =>(
    <a key ={i.label}
    href ={i.href}
    onClick = {() => close()}
    className="rounded-xl px-4 py-3 text-lg font-medium hover:bg-soft">

{i.label}
    </a>
    
))}

</nav>

          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
