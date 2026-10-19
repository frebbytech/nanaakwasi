export type Post = {
  /** URL slug: /blog/:slug */
  slug: string;
  title: string;
  /** One-sentence summary shown in lists */
  excerpt: string;
  /** ISO date, e.g. "2026-01-31" */
  publishedAt: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
  /** Plain text. Separate paragraphs with a blank line. */
  body: string;
};

/**
 * Layout-only for now: posts will later be fetched from Firebase Firestore.
 * Replace this with a fetcher that returns Post[] and the blog pages,
 * home-page teaser and empty states will adapt without further UI changes.
 */
export const posts: Post[] = [];

export const getPost = (slug: string | undefined) =>
  posts.find((p) => p.slug === slug);

export const formatPostDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(new Date(iso));
