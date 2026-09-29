
import Container from "./Container"

const links = [
  { label: 'Explore Work', href: '#projects' },
  { label: 'Find Designers', href: '#designers' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'How It Works', href: '#how' },
]


const Footer = () => {
 return (
    <footer className="border-t border-line dark:bg-ink">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="Zackgrafix" width="56" height="56" className="h-14 w-14 dark:invert" />
          <p className="max-w-xs text-sm text-muted">A home for remarkable design, starting in Rwanda.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-3 text-sm ">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cta dark:hover:text-brand">{l.label}</a>
          ))}
        </nav>
      </Container>
      <p className="border-t border-line py-5 text-center text-sm text-muted">&copy; 2026 Zackgrafix</p>
    </footer>
  )
}

export default Footer