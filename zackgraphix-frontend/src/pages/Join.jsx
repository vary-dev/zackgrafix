import { useSearchParams } from "react-router";
import { Check } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";

const roles = {
  designer: {
    title: "I’m a designer",
    description: "Build a personal brand and showcase your work.",
    steps: ["Create your account", "Complete your profile", "Publish your projects"],
  },
  employer: {
    title: "I’m looking to hire",
    description: "Find a creative partner for a project or team.",
    steps: ["Create your employer account", "Describe what you need", "Connect with designers"],
  },
};

export default function Join() {
  const [params, setParams] = useSearchParams();
  const role = params.get("role") === "employer" ? "employer" : "designer";

  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
        Join Zackgrafix
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        Choose your starting point.
      </h1>
      <p className="mt-5 leading-7 text-muted">
        Tell us how you want to use Zackgrafix.
      </p>

      <div aria-label="Choose your role" className="mt-8 grid gap-4 sm:grid-cols-2">
        {Object.entries(roles).map(([key, value]) => (
          <button
            key={key}
            type="button"
            aria-pressed={role === key}
            onClick={() => setParams({ role: key }, { replace: true })}
            className={`rounded-md border p-6 text-left transition-colors ${
              role === key ? "border-cta bg-soft" : "border-line hover:bg-surface"
            }`}
          >
            <span className="flex items-center justify-between gap-3 font-heading text-xl font-semibold">
              {value.title}
              {role === key && <Check size={20} aria-hidden="true" />}
            </span>
            <span className="mt-3 block text-sm leading-6 text-muted">
              {value.description}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10 border-t border-line pt-6">
        <h2 className="font-heading text-xl font-semibold">Your next steps</h2>
        <ol className="mt-4 space-y-3 text-muted">
          {roles[role].steps.map((step, index) => (
            <li key={step}>{index + 1}. {step}</li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-6 text-muted">
          Registration is coming next. This preview lets you explore the
          designer and employer onboarding paths.
        </p>
        <Button to="/" variant="outline" className="mt-6">
          Back to the website
        </Button>
      </div>
    </Container>
  );
}