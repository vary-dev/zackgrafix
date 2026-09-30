import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { projects, categories } from "../data/projects";

const hiringSteps = [
  ["Explore the work", "Look for the discipline and visual direction your project needs."],
  ["Review the designer", "Check their portfolio, experience, and current availability."],
  ["Share a clear brief", "Explain your scope, timeline, and budget before starting a conversation."],
];

export default function LandingSections() {
  const [category, setCategory] = useState("All");
  const visible = projects.filter(
    (project) => category === "All" || project.category === category
  );

  return (
    <>
      <section id="work" aria-labelledby="work-title" className="border-t border-line py-16 sm:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                Selected work
              </p>
              <h2 id="work-title" className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Ideas made visible.
              </h2>
            </div>

            <div aria-label="Filter work" className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                  className={`min-h-11 rounded-md px-4 text-sm transition-colors ${
                    category === item
                      ? "bg-ink text-canvas"
                      : "text-muted hover:bg-surface"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-muted" aria-live="polite" aria-atomic="true">
            {visible.length} design {visible.length === 1 ? "preview" : "previews"}
          </p>

          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section id="hire" aria-labelledby="hire-title" className="bg-surface py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              For clients and employers
            </p>
            <h2 id="hire-title" className="max-w-lg font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Find the person behind your next great idea.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-muted">
              Start with the work. Understand the designer’s approach,
              then introduce the project you want to create together.
            </p>
            <Button to="/join?role=employer" className="mt-7">
              Join as an employer <ArrowRight size={16} />
            </Button>
          </div>

          <ol className="divide-y divide-line">
            {hiringSteps.map(([title, description], index) => (
              <li key={title} className="flex gap-5 py-6 first:pt-0">
                <span className="font-heading text-xl text-brand">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-muted">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="how" aria-labelledby="how-title" className="py-16 sm:py-20">
        <Container>
          <h2 id="how-title" className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Two paths. One creative community.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="border-t-2 border-brand pt-6">
              <h3 className="font-heading text-2xl font-semibold">For designers</h3>
              <p className="mt-4 leading-7 text-muted">
                Create your profile, share your strongest projects, and show
                clients the thinking behind your work.
              </p>
              <Button to="/join?role=designer" variant="outline" className="mt-6">
                Start your personal brand
              </Button>
            </div>

            <div className="border-t border-line pt-6">
              <h3 className="font-heading text-2xl font-semibold">For hiring teams</h3>
              <p className="mt-4 leading-7 text-muted">
                Discover relevant portfolios, compare creative approaches,
                and prepare a brief that starts a useful conversation.
              </p>
              <Button href="#hire" variant="outline" className="mt-6">
                Understand the hiring process
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}