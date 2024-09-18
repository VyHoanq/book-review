export function generateSlug(title) {
  if (typeof title !== 'string') {
    return ''; // Return an empty string or handle as needed
  }

  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^\-+/, "")
    .replace(/\-+$/, "");

  return slug;
}
