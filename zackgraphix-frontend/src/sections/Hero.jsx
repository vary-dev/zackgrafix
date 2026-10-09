import {
  Palette,
  Code2,
  Users,
  Lightbulb,
  Check,
  ArrowRight,
} from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";

const nodes = [
  {
    label: "Designers",
    Icon: Palette,
    color: "#FBE3CB",
    position: "flow-designer",
  },
  {
    label: "Developers",
    Icon: Code2,
    color: "#DDE3C2",
    position: "flow-developer",
  },
  {
    label: "Young leaders",
    Icon: Users,
    color: "#F1E6BF",
    position: "flow-leader",
  },
  {
    label: "Innovation hubs",
    Icon: Lightbulb,
    color: "#CFDCD3",
    position: "flow-hub",
  },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow">Zackgrafix · Talent meets opportunity</p>

          <h1
            id="hero-title"
            className="max-w-xl font-heading text-[40px] font-extrabold leading-[1.12] tracking-tight sm:text-[56px]"
          >
            Show your skills.
            <br />
            <span className="swash">Find your next.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-7 text-muted">
            Build your profile. Connect through your work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/join">
              Join as talent <ArrowRight size={16} />
            </Button>
            <Button href="#hire" variant="outline">
              Hire talent
            </Button>
          </div>

          <a href="#work" className="text-link mt-5">
            Explore the gallery <ArrowRight size={16} />
          </a>
        </div>

        <figure
          className="flow-board"
          aria-label="Four talent paths connect through demonstrating skills toward opportunities."
        >
          <svg
            className="flow-lines"
            viewBox="0 0 560 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M100 90 Q200 90 280 200" />
            <path d="M460 90 Q360 90 280 200" />
            <path d="M100 310 Q200 310 280 200" />
            <path d="M460 310 Q360 310 280 200" />
            <path d="M280 230 L280 350" />
          </svg>

          {nodes.map(({ label, Icon, color, position }, index) => (
            <div
              key={label}
              className={`flow-node ${position}`}
              style={{ "--node-delay": `${index * 80}ms` }}
            >
              <span
                className="grid h-14 w-14 place-items-center rounded-2xl text-[#1c2417]"
                style={{ backgroundColor: color }}
              >
                <Icon size={25} aria-hidden="true" />
              </span>
              <span className="mt-3 text-center text-xs font-bold sm:text-sm">
                {label}
              </span>
            </div>
          ))}

          <div className="flow-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-[#1c2417] sm:h-20 sm:w-20">
              <Check size={32} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span className="mt-3 text-sm font-bold">Demonstrate skills</span>
          </div>

          <div className="flow-outcome">
            <ArrowRight size={17} aria-hidden="true" />
            Opportunity
          </div>
        </figure>
      </Container>
    </section>
  );
}