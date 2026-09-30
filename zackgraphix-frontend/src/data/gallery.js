const files = import.meta.glob(
  "../assets/images/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
    query: "?url",
  }
);

const labels = {
  "mockup_land1.jpg": ["Brand identity", "Branding"],
  "mockup2.webp": ["Digital experience", "Digital"],
  "mockup3.jpg": ["Visual direction", "Visual"],
  "coco_beaty_brand.webp": ["Beauty brand", "Branding"],
  "for_brand.jpg": ["Brand exploration", "Branding"],
  "for_company.webp": ["Company identity", "Branding"],
  "for_image.jpg": ["Creative study", "Visual"],
  "fulo.jpg": ["Visual inspiration", "Visual"],
  "image_buss_talk.jpg": ["Collaboration", "Community"],
  "image_shaza.jpg": ["Creative perspective", "Visual"],
  "order_logo.jpg": ["Logo exploration", "Branding"],
  "patriotism.jpg": ["Community inspiration", "Community"],
};

export const gallery = Object.entries(files).map(([path, src]) => {
  const filename = path.split("/").pop();
  const fallback = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]/g, " ");

  const [title, category] = labels[filename] || [fallback, "Visual"];

  return {
    id: filename,
    src,
    title,
    category,
    alt: `${title} design preview`,
  };
});

export const galleryCategories = [
  "All",
  ...new Set(gallery.map((image) => image.category)),
];

export function findGalleryImage(filename) {
  return gallery.find((image) => image.id === filename)?.src;
}