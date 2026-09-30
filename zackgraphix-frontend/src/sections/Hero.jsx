import { ArrowRight } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            A home for remarkable design
          </p>

          <h1
            id="hero-title"
            className="max-w-xl font-heading text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.05em]"
          >
            Great design deserves to be{" "}
            <span className="text-brand">seen.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg">
            Discover creative work, build your personal brand, and connect
            with people who value what you make.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#work">
              Explore work <ArrowRight size={16} />
            </Button>
            <Button to="/join?role=designer" variant="outline">
              Build your profile
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted">
            Have a project in mind?{" "}
            <a
              href="#hire"
              className="font-semibold text-ink underline decoration-brand underline-offset-4"
            >
              Find your creative partner
            </a>
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-24 w-24 border-b-2 border-l-2 border-brand"
          />

          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <ProjectCard
                project={projects[0]}
                compact
                priority
                aspect="aspect-[4/5]"
              />
              <ProjectCard
                project={{ ...projects[2], id: "hero-visual" }}
                compact
                priority
                aspect="aspect-[4/3]"
              />
            </div>

            <div className="space-y-3 pt-8 sm:space-y-4">
              <ProjectCard
                project={projects[1]}
                compact
                priority
                aspect="aspect-[4/3]"
              />
              <ProjectCard
                project={{ ...projects[0], id: "hero-brand-repeat" }}
                compact
                priority
                aspect="aspect-[4/5]"
              />
            </div>
          </div>

          <p className="mt-6 text-xs text-muted">
            Selected design previews · Click an image to explore
          </p>
        </div>
      </Container>
    </section>
  );
}