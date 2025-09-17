export function slugify(name: string) {
  return name.toLowerCase()
      .replace(/[^\w\s-]/g, '') // remove non-word chars
      .trim()
      .replace(/\s+/g, '-'); // replace spaces with hyphen)
}