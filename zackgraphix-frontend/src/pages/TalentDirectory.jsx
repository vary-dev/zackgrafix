import { useState } from "react";
import { useSearchParams } from "react-router";
import Container from "../components/Container";
import TalentCard from "../components/TalentCard";
import { roles, talents } from "../data/site";

export default function TalentDirectory() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const role = params.get("role") || "all";
  const verifiedOnly = params.get("verified") === "true";

  function update(key, value) {
    const next = new URLSearchParams(params);
    if (value && value !== "all") next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  }

  const visible = talents.filter((talent) => {
    const matchesRole = role === "all" || talent.role === role;
    const matchesVerification = !verifiedOnly || talent.kycStatus === "verified";
    const searchable = `${talent.name} ${talent.title} ${talent.skills.join(" ")}`.toLowerCase();
    return matchesRole && matchesVerification && searchable.includes(search.trim().toLowerCase());
  });

  return (
    <Container className="section">
      <p className="eyebrow">Discover talent</p>
      <h1 className="section-title">Find your creative or technical partner.</h1>
      <p className="mt-4 text-muted">Demo directory using fictional profiles for layout testing.</p>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end">
        <label className="flex-1 text-sm font-semibold">
          Search by name or skill
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try React, branding, or leadership"
            className="mt-2 block min-h-13 w-full rounded-xl border border-line bg-canvas px-4 font-normal"
          />
        </label>
        <label className="text-sm font-semibold">
          Role
          <select
            value={role}
            onChange={(event) => update("role", event.target.value)}
            className="mt-2 block min-h-13 rounded-xl border border-line bg-canvas px-4 font-normal"
          >
            <option value="all">All roles</option>
            {roles.map((item) => <option key={item.key} value={item.key}>{item.name}</option>)}
          </select>
        </label>
        <label className="flex min-h-13 items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(event) => update("verified", event.target.checked ? "true" : "")}
            className="h-4 w-4 accent-[#5f6b3a]"
          />
          KYC verified only
        </label>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite" aria-atomic="true">
        {visible.length} sample profiles found
      </p>

      {visible.length ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((talent) => <TalentCard key={talent.id} talent={talent} />)}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl bg-surface p-8">
          <h2 className="font-heading text-xl font-bold">No profiles match these filters.</h2>
          <button
            type="button"
            onClick={() => { setSearch(""); setParams({}); }}
            className="text-link mt-3"
          >
            Clear filters
          </button>
        </div>
      )}
    </Container>
  );
}