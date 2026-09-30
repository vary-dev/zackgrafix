import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Container from "../components/Container";
import Button from "../components/Button";
import { gallery, galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [limit, setLimit] = useState(6);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  const filtered = gallery.filter(
    (image) => category === "All" || image.category === category
  );

  function changeCategory(next) {
    setCategory(next);
    setLimit(6);
  }

  function openPreview(image) {
    setSelected(image);
    dialogRef.current?.showModal();
  }

  return (
    <section id="work" className="section" aria-labelledby="gallery-title">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">The gallery</p>
            <h2 id="gallery-title" className="section-title">
              Let the work <span className="swash">speak.</span>
            </h2>
          </div>

          <div aria-label="Filter gallery" className="flex flex-wrap gap-2">
            {galleryCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => changeCategory(item)}
                className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors ${
                  category === item
                    ? "bg-soft text-sage"
                    : "text-muted hover:bg-surface"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p
          className="mt-4 text-xs text-muted"
          aria-live="polite"
          aria-atomic="true"
        >
          {filtered.length} gallery previews
        </p>

        {filtered.length ? (
          <div className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, limit).map((image, index) => (
              <button
                key={image.id}
                type="button"
                aria-haspopup="dialog"
                aria-label={`Preview ${image.title}`}
                onClick={() => openPreview(image)}
                className="gallery-card group text-left"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-surface ${
                    index % 3 === 1 ? "aspect-[4/5]" : "aspect-[5/4]"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="800"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-canvas text-ink transition-transform group-hover:-rotate-12"
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 pt-4">
                  <h3 className="font-heading text-base font-semibold">
                    {image.title}
                  </h3>
                  <span className="pt-0.5 text-xs text-muted">
                    {image.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="image-slot mt-6 min-h-64">
            Add your gallery images to src/assets/images.
          </div>
        )}

        {limit < filtered.length && (
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              onClick={() => setLimit((current) => current + 6)}
            >
              Show more work
            </Button>
          </div>
        )}

        <dialog
          ref={dialogRef}
          aria-labelledby="gallery-preview-title"
          className="fixed inset-0 m-auto max-h-[92dvh] w-[min(94vw,1100px)] overflow-auto rounded-2xl border border-line p-4 sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted">Gallery preview</p>
              <h2
                id="gallery-preview-title"
                className="mt-1 font-heading text-lg font-bold"
              >
                {selected?.title || "Image preview"}
              </h2>
            </div>

            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              aria-label="Close image preview"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-soft"
            >
              <X size={22} />
            </button>
          </div>

          {selected && (
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[72dvh] w-full object-contain"
            />
          )}
        </dialog>
      </Container>
    </section>
  );
}