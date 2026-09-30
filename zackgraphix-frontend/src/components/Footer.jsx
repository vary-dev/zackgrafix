import { Link, useLocation } from "react-router";
import Container from "./Container";

export default function Footer() {
  const { pathname } = useLocation();
  const href = (id) => pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col justify-between gap-8 py-10 md:flex-row">
        <div>
          <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
            Zack<span className="text-brand">grafix</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            A home for remarkable design, starting in Rwanda.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-start gap-x-7 gap-y-4 text-sm">
          <a href={href("work")} className="hover:text-cta">Explore work</a>
          <a href={href("hire")} className="hover:text-cta">Hire talent</a>
          <a href={href("how")} className="hover:text-cta">How it works</a>
          <Link to="/join" className="hover:text-cta">Join us</Link>
        </nav>
      </Container>

      <Container className="border-t border-line py-5 text-xs text-muted">
        © {new Date().getFullYear()} Zackgrafix
      </Container>
    </footer>
  );
}