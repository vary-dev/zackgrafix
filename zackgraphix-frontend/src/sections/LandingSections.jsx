import { useState } from "react";
import { Link } from "react-router";
import {
  Palette,
  Code2,
  Users,
  Lightbulb,
  UserRound,
  ListChecks,
  Search,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import TalentCard from "../components/TalentCard";
import Gallery from "./Gallery";
import useOnceVisible from "../hooks/useOnceVisible";
import { roles, talents, resources } from "../data/site";
import { findGalleryImage } from "../data/gallery";

const roleIcons = {
  designer: Palette,
  developer: Code2,
  leader: Users,
  hub: Lightbulb,
};

const steps = [
  { label: "Create", description: "Build your profile", Icon: UserRound },
  { label: "Demonstrate", description: "Show your skills", Icon: ListChecks },
  { label: "Discover", description: "Find your fit", Icon: Search },
  { label: "Connect", description: "Start a conversation", Icon: Handshake },
];

const resourceIcons = [Lightbulb, Code2, Users];

export default function LandingSections() {
  const [roleFilter, setRoleFilter] = useState("all");
  const { ref, visible } = useOnceVisible();

  const visibleTalent = talents.filter(
    (talent) => roleFilter === "all" || talent.role === roleFilter
  );

  const employerImage = findGalleryImage("image_buss_talk.jpg");

  return (
    <>
      <section id="roles" className="section bg-surface" aria-labelledby="roles-title">
        <Container>
          <p className="eyebrow">Four paths</p>
          <h2 id="roles-title" className="section-title">
            Find your <span className="swash">place.</span>
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role) => {
              const Icon = roleIcons[role.key];

              return (
                <Link
                  key={role.key}
                  to={`/join?role=${role.key}`}
                  className="role-tile group"
                  style={{ backgroundColor: role.color }}
                >
                  <Icon
                    size={34}
                    strokeWidth={1.6}
                    className="transition-transform duration-200 group-hover:-rotate-6"
                    aria-hidden="true"
                  />
                  <h3 className="mt-8 font-heading text-xl font-bold">
                    {role.name}
                  </h3>
                  <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold">
                    Start here <ArrowRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="how" className="section" aria-labelledby="how-title">
        <Container>
          <p className="eyebrow">Your path</p>
          <h2 id="how-title" className="section-title">
            Small steps. <span className="swash">New possibilities.</span>
          </h2>

          <ol
            ref={ref}
            data-visible={visible}
            className="path-steps mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map(({ label, description, Icon }, index) => (
              <li
                key={label}
                className="path-step"
                style={{ "--step-delay": `${index * 120}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-[#1c2417] ${
                      index === 3 ? "bg-[#F28C28]" : "bg-brand"
                    }`}
                  >
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <span className="font-heading text-3xl font-extrabold text-sage">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold">{label}</h3>
                <p className="mt-2 text-sm text-muted">{description}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-xl text-xs leading-6 text-muted">
            KYC verifies identity. Qualification records a passed skills assessment.
          </p>
        </Container>
      </section>

      <Gallery />

      <section id="talent" className="section bg-surface" aria-labelledby="talent-title">
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">People behind the work</p>
              <h2 id="talent-title" className="section-title">
                Meet your next <span className="swash">collaborator.</span>
              </h2>
            </div>
            <Link to="/talent" className="text-link">
              Browse all <ArrowRight size={17} />
            </Link>
          </div>

          <div aria-label="Filter talent" className="mt-7 flex flex-wrap gap-2">
            {[{ key: "all", name: "All" }, ...roles].map((role) => (
              <button
                key={role.key}
                type="button"
                aria-pressed={roleFilter === role.key}
                onClick={() => setRoleFilter(role.key)}
                className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
                  roleFilter === role.key
                    ? "bg-canvas text-sage"
                    : "text-muted hover:bg-canvas"
                }`}
              >
                {role.name}
              </button>
            ))}
          </div>

          <p className="mt-3 text-xs text-muted" aria-live="polite" aria-atomic="true">
            {visibleTalent.length} demo profiles
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleTalent.map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>
        </Container>
      </section>

      <section id="hire" className="section bg-forest text-white" aria-labelledby="hire-title">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[5/4] overflow-hidden rounded-3xl bg-white/10">
            {employerImage ? (
              <img
                src={employerImage}
                alt="Community collaboration preview"
                loading="lazy"
                width="1000"
                height="800"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="grid h-full place-items-center p-8 text-center text-white/75">
                Collaboration photo
              </div>
            )}
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              For employers
            </p>
            <h2 id="hire-title" className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
              Find the right mind.
              <br />
              Build something great.
            </h2>

            <div className="mt-7 grid grid-cols-3 gap-4">
              {[
                [Search, "Discover"],
                [ListChecks, "Review"],
                [Handshake, "Connect"],
              ].map(([Icon, label]) => (
                <div key={label} className="border-t border-white/20 pt-4">
                  <Icon size={23} aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button to="/talent">Browse talent</Button>
              <Link
                to="/join?role=employer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4"
              >
                Join as employer <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="opportunities" className="section" aria-labelledby="opportunities-title">
        <Container className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="eyebrow">Opportunities</p>
            <h2 id="opportunities-title" className="section-title">
              Your next <span className="swash">chapter.</span>
            </h2>
          </div>
          <div className="rounded-3xl bg-soft p-7">
            <h3 className="font-heading text-xl font-bold">Openings are coming.</h3>
            <p className="mt-3 text-sm text-muted">
              No opportunities have been published in this preview.
            </p>
            <Link to="/join?role=employer" className="text-link mt-4">
              Employer onboarding <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <section id="resources" className="section bg-surface" aria-labelledby="resources-title">
        <Container>
          <p className="eyebrow">Keep growing</p>
          <h2 id="resources-title" className="section-title">
            A little <span className="swash">inspiration.</span>
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resourceIcons[index % resourceIcons.length];

              return (
                <article key={resource.id} className="rounded-3xl bg-canvas p-7">
                  <div className="grid aspect-[16/9] place-items-center overflow-hidden rounded-2xl bg-soft">
                    {resource.image ? (
                      <img
                        src={resource.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Icon size={48} strokeWidth={1.4} className="text-sage" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold">{resource.title}</h3>
                  <p className="mt-2 text-xs text-muted">Content being prepared</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="community" className="section" aria-labelledby="community-title">
        <Container className="text-center">
          <p className="eyebrow">Built for connection</p>
          <h2 id="community-title" className="section-title">
            Talent grows <span className="swash">together.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-7 text-muted">
            A place to show your work and discover the people behind it.
          </p>
          <Button to="/join" className="mt-7">Join Zackgrafix</Button>
        </Container>
      </section>
    </>
  );
}