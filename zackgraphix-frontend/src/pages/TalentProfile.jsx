import { useState } from "react";
import { Link, useParams } from "react-router";
import { Bookmark, MapPin } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { IdentityBadge } from "../components/TalentCard";
import { talents, roles } from "../data/site";
import { projects } from "../data/projects";

export default function TalentProfile() {
  const { id } = useParams();
  const talent = talents.find((item) => item.id === id);
  const [view, setView] = useState("Portfolio");
  const [saved, setSaved] = useState(false);

  if (!talent) {
    return (
      <Container className="section">
        <h1 className="section-title">Profile not found</h1>
        <Link to="/talent" className="text-link mt-6">Browse talent</Link>
      </Container>
    );
  }

  const role = roles.find((item) => item.key === talent.role);
  const portfolio = projects.filter((project) => talent.projectIds.includes(project.id));
  const initials = talent.name.split(" ").map((part) => part[0]).slice(0, 2).join("");

  return (
    <Container className="pb-20 pt-8">
      <Link to="/talent" className="text-link">← Back to talent</Link>
      <p className="my-4 text-sm text-muted">
        Fictional demo profile. Verification and qualification values are sample states.
      </p>

      <div className="relative grid aspect-[3/1] max-h-72 place-items-center overflow-hidden rounded-3xl bg-soft">
        {talent.cover ? (
          <img src={talent.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <span className="text-sm text-muted">Profile cover artwork placeholder</span>
        )}
      </div>

      <div className="relative px-2 sm:px-6">
        <div className="-mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-full border-4 border-canvas bg-brand text-[#1c2417]">
              {talent.portrait ? (
                <img src={talent.portrait} alt={`${talent.name} portrait`} className="h-full w-full object-cover" />
              ) : <span className="font-heading text-3xl font-bold">{initials}</span>}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h1 className="font-heading text-3xl font-bold">{talent.name}</h1>
              <IdentityBadge verified={talent.kycStatus === "verified"} />
            </div>
            <p className="mt-2 text-lg text-muted">{talent.title}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} /> {talent.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/join?role=employer">Contact / invite</Button>
            <Button
              variant="outline"
              aria-pressed={saved}
              onClick={() => setSaved((value) => !value)}
            >
              <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
              {saved ? "Saved" : "Save profile"}
            </Button>
          </div>
        </div>

        <p className="mt-3 text-sm text-muted" aria-live="polite">
          {saved ? "Saved for this visit." : ""}
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            <div aria-label="Profile content" className="flex gap-2 border-b border-line pb-3">
              {["Portfolio", "Skills", "About"].map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={view === item}
                  onClick={() => setView(item)}
                  className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
                    view === item ? "bg-soft text-sage" : "text-muted"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <section className="pt-6" aria-label={view}>
              {view === "Portfolio" && (
                portfolio.length ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {portfolio.map((project) => <ProjectCard key={project.id} project={project} />)}
                  </div>
                ) : (
                  <div className="image-slot min-h-64">
                    Portfolio or initiative cards will appear here.
                  </div>
                )
              )}

              {view === "Skills" && (
                <>
                  <h2 className="font-heading text-xl font-bold">Areas of focus</h2>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {talent.skills.map((skill) => (
                      <li key={skill} className="rounded-full bg-soft px-4 py-2 text-sm">{skill}</li>
                    ))}
                  </ul>
                </>
              )}

              {view === "About" && (
                <>
                  <h2 className="font-heading text-xl font-bold">About {talent.name}</h2>
                  <p className="mt-4 leading-7 text-muted">{talent.bio}</p>
                  <div className="mt-6 border-t border-line pt-5">
                    <h3 className="font-heading font-bold">Experience</h3>
                    <p className="mt-3 text-sm text-muted">
                      Add real positions, dates, responsibilities, and achievements here.
                    </p>
                  </div>
                </>
              )}
            </section>
          </div>

          <aside className="h-fit rounded-3xl border border-line p-6">
            <h2 className="font-heading text-xl font-bold">Profile details</h2>
            <p className="mt-4 text-sm text-muted">{role.name}</p>
            <div className="mt-4">
              {talent.kycStatus === "verified" ? (
                <IdentityBadge verified showText />
              ) : (
                <p className="text-sm text-muted">Identity not verified</p>
              )}
            </div>
            <p className="mt-3 text-sm text-muted">
              {talent.qualificationStatus === "passed"
                ? "Skills assessment: passed"
                : "Skills assessment: not yet passed"}
            </p>
            <p className="mt-3 text-sm text-muted">
              {talent.available ? "Available for work" : "Not currently available"}
            </p>
            <p className="mt-5 border-t border-line pt-5 text-xs leading-6 text-muted">
              The green check confirms identity verification. Availability
              and skills qualification are shown separately.
            </p>
          </aside>
        </div>
      </div>
    </Container>
  );
}