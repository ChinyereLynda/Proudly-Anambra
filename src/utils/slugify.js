export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove all non-word chars
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with -
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing -
}
