import { Link, useLocation } from "react-router";
import Container from "./Container";

export default function Footer() {
  const { pathname } = useLocation();
  const anchor = (id) => pathname === "/" ? `#${id}` : `/#${id}`;

  const columns = [
    {
      title: "Platform",
      links: [
        ["How it works", anchor("how")],
        ["Explore work", anchor("work")],
        ["Talent directory", "/talent"],
      ],
    },
    {
      title: "For talent",
      links: [
        ["Create your profile", "/join?role=designer"],
        ["Discover opportunities", anchor("opportunities")],
      ],
    },
    {
      title: "For employers",
      links: [
        ["Hiring guide", anchor("hire")],
        ["Browse talent", "/talent"],
        ["Join as employer", "/join?role=employer"],
      ],
    },
    {
      title: "Community",
      links: [
        ["About Zackgrafix", anchor("community")],
        ["Knowledge hub", anchor("resources")],
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link to="/" className="font-heading text-2xl font-bold">
            Zack<span className="text-sage">grafix</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
            Helping talent become visible, demonstrate their abilities,
            and connect with opportunity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-heading text-sm font-bold">{column.title}</h2>
              <ul className="mt-4 space-y-2">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    {href.includes("#") ? (
                      <a href={href} className="inline-block py-2 text-sm text-muted hover:text-sage">
                        {label}
                      </a>
                    ) : (
                      <Link to={href} className="inline-block py-2 text-sm text-muted hover:text-sage">
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <Container className="border-t border-line py-6 text-xs text-muted">
        © {new Date().getFullYear()} Zackgrafix
      </Container>
    </footer>
  );
}