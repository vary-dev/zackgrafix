import { useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";

export default function ProjectCard({
  project,
  aspect = "aspect-[4/3]",
  compact = false,
  priority = false,
}) {
  const dialogRef = useRef(null);
  const titleId = `preview-title-${project.id}-${compact ? "hero" : "work"}`;

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Preview ${project.title}`}
        aria-haspopup="dialog"
        className="group block w-full text-left"
      >
        <div className={`relative overflow-hidden rounded-md bg-surface ${aspect}`}>
          <img
            src={project.image}
            alt={project.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />

          <span
            aria-hidden="true"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-md bg-canvas text-ink"
          >
            <ArrowUpRight size={18} />
          </span>
        </div>

        {!compact && (
          <div className="flex items-start justify-between gap-4 pt-4">
            <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
            <span className="pt-1 text-xs text-muted">{project.category}</span>
          </div>
        )}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[min(92vw,960px)] overflow-auto rounded-lg border border-line p-4 sm:p-6"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted">Design preview</p>
            <h2 id={titleId} className="font-heading text-xl font-semibold">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current?.close()}
            aria-label="Close preview"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md hover:bg-surface"
          >
            <X size={20} />
          </button>
        </div>

        <img
          src={project.image}
          alt={project.alt}
          className="max-h-[65dvh] w-full object-contain"
        />
      </dialog>
    </>
  );
}