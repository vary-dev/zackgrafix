import { Link } from "react-router";
import { BadgeCheck, ArrowUpRight, MapPin } from "lucide-react";
import { roles } from "../data/site";

export function IdentityBadge({ verified, showText = false }) {
  if (!verified) return null;

  return (
    <span
      title="Identity verified through KYC"
      className="inline-flex items-center gap-1.5"
      aria-label="Identity verified through KYC"
    >
      <BadgeCheck
        size={21}
        fill="#15803d"
        stroke="white"
        strokeWidth={2}
        aria-hidden="true"
      />
      {showText && <span className="text-sm">Identity verified</span>}
    </span>
  );
}

export default function TalentCard({ talent }) {
  const role = roles.find((item) => item.key === talent.role);
  const initials = talent.name.split(" ").map((part) => part[0]).slice(0, 2).join("");

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-canvas transition-shadow hover:shadow-[0_8px_24px_rgba(47,74,58,.10)]">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-soft">
        {talent.portrait ? (
          <img
            src={talent.portrait}
            alt={`${talent.name} portrait`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-brand font-heading text-3xl font-bold text-[#1c2417]">
              {initials}
            </div>
            <p className="mt-3 text-xs text-muted">Portrait placeholder</p>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-canvas px-3 py-1 text-xs font-semibold">
          Demo profile
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-lg font-bold">{talent.name}</h3>
          <IdentityBadge verified={talent.kycStatus === "verified"} />
        </div>

        <p className="mt-1 text-sm text-muted">{talent.title}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold text-[#1c2417]"
            style={{ backgroundColor: role.color }}
          >
            {role.name}
          </span>
          {talent.qualificationStatus === "passed" && (
            <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-[#1c2417]">
              Qualified
            </span>
          )}
        </div>

        <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
          <MapPin size={14} aria-hidden="true" /> {talent.location}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          {talent.skills.slice(0, 3).map((skill) => <li key={skill}>{skill}</li>)}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="text-xs text-muted">
            {talent.available ? "Available for work" : "Not currently available"}
          </span>
          <Link to={`/talent/${talent.id}`} className="text-link">
            Profile <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}