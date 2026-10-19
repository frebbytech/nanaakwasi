import Section from "@/components/ui/Section";
import PostCard from "@/components/blog/PostCard";
import { ButtonLink } from "@/components/ui/Button";
import { posts } from "@/data/posts";
import { usePageTitle } from "@/hooks/usePageTitle";

function Blog() {
  usePageTitle("Blog");

  return (
    <Section bordered={false} labelledBy="blog-title" className="min-h-[60vh]">
      <h1 id="blog-title" className="text-display font-display font-bold text-fg">
        Blog
      </h1>
      <p className="text-lead mt-5 max-w-2xl text-muted">
        Notes on building software: what I’m learning, and how I solve problems.
      </p>

      {posts.length === 0 ? (
        <div className="mt-14 max-w-xl border-t border-line pt-8">
          <h2 className="font-display text-xl font-bold text-fg">First posts coming soon</h2>
          <p className="mt-2 text-muted">
            Nothing has been published yet. In the meantime, have a look at the
            projects I’ve built.
          </p>
          <ButtonLink to="/portfolio" variant="secondary" className="mt-6">
            View projects
          </ButtonLink>
        </div>
      ) : (
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </Section>
  );
}

export default Blog;
