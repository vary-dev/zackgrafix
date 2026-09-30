import { useSearchParams } from "react-router";
import { Check } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";

const roles = {
  designer: {
    title: "I’m a designer",
    description: "Showcase your visual work.",
    steps: ["Create your account", "Build your profile", "Publish your portfolio"],
  },
  developer: {
    title: "I’m a developer",
    description: "Share the products you build.",
    steps: ["Create your account", "Add your skills", "Show your projects"],
  },
  leader: {
    title: "I’m a young leader",
    description: "Make your initiatives visible.",
    steps: ["Create your account", "Introduce your work", "Share your impact"],
  },
  hub: {
    title: "We’re an innovation hub",
    description: "Connect your community.",
    steps: ["Create an organisation account", "Introduce your hub", "Share programmes"],
  },
  employer: {
    title: "I’m looking to hire",
    description: "Find your next collaborator.",
    steps: ["Create your employer account", "Describe your needs", "Explore talent"],
  },
};

// This default export matches: import Join from "./pages/Join";
export default function Join() {
  const [params, setParams] = useSearchParams();

  const requestedRole = params.get("role");
  const role = Object.hasOwn(roles, requestedRole)
    ? requestedRole
    : "designer";

  function selectRole(nextRole) {
    const next = new URLSearchParams(params);
    next.set("role", nextRole);
    setParams(next, { replace: true });
  }

  return (
    <Container className="section max-w-4xl">
      <p className="eyebrow">Join Zackgrafix</p>

      <h1 className="section-title">
        Choose your <span className="swash">path.</span>
      </h1>

      <p className="mt-4 text-muted">
        How would you like to use Zackgrafix?
      </p>

      <div
        aria-label="Choose your role"
        className="mt-8 grid gap-4 sm:grid-cols-2"
      >
        {Object.entries(roles).map(([key, value]) => (
          <button
            key={key}
            type="button"
            aria-pressed={role === key}
            onClick={() => selectRole(key)}
            className={`rounded-2xl border p-6 text-left transition-colors ${
              role === key
                ? "border-sage bg-soft"
                : "border-line hover:bg-surface"
            }`}
          >
            <span className="flex items-center justify-between gap-3">
              <span className="font-heading text-lg font-bold">
                {value.title}
              </span>

              {role === key && (
                <Check
                  size={20}
                  className="shrink-0 text-sage"
                  aria-hidden="true"
                />
              )}
            </span>

            <span className="mt-3 block text-sm leading-6 text-muted">
              {value.description}
            </span>
          </button>
        ))}
      </div>

      <section
        aria-labelledby="next-steps-title"
        className="mt-10 border-t border-line pt-6"
      >
        <h2
          id="next-steps-title"
          className="font-heading text-xl font-bold"
        >
          Your next steps
        </h2>

        <ol className="mt-4 list-inside list-decimal space-y-3 text-muted">
          {roles[role].steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <p className="mt-6 text-sm leading-6 text-muted">
          This is an onboarding preview. Account registration will be
          available when the backend is connected.
        </p>

        <Button to="/" variant="outline" className="mt-6">
          Back to the website
        </Button>
      </section>
    </Container>
  );
}