import Container from '../components/Container'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Hero() {
  const [p1, p2, p3, p4] = projects

  return (
    <section id="top-content">
      <Container className="grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[45fr_55fr] lg:pb-24 lg:pt-20">
        <div>
          <h1 className="font-heading text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            Great design deserves to be seen.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            Discover designers through their work. Build a portfolio that gets noticed,
            connect with clients, and find your next opportunity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">Explore projects</Button>
            <Button href="#join" variant="outline">Showcase your work</Button>
          </div>
          <p className="mt-5 text-muted">
            Looking to hire?{' '}
            <a href="#designers" className="font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4 dark:text-canvas">
              Find a designer
            </a>
          </p>
        </div>

        <div className="relative">
          <svg
            className="absolute -bottom-10 -left-6 -z-10 w-[85%] text-brand"
            viewBox="0 0 400 140"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 130C90 40 230 10 340 40c50 14 60 50 20 70-60 30-130-10-190 0-60 8-110 20-170 20z" />
          </svg>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ProjectCard project={p1} aspect="aspect-[3/4]" />
              <ProjectCard project={p4} aspect="aspect-square" />
            </div>
            <div className="space-y-4 pt-10">
              <ProjectCard project={p2} aspect="aspect-square" />
              <ProjectCard project={p3} aspect="aspect-[3/4]" />
            </div>
          </div>
          <p className="relative mt-4 text-sm text-muted">
            Sample projects. Placeholder artwork until designers publish real work.
          </p>
        </div>
      </Container>
    </section>
  )
}