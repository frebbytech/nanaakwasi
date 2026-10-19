import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { formatPostDate, getPost } from "@/data/posts";
import { usePageTitle } from "@/hooks/usePageTitle";

function MoreBlog() {
  const { slug } = useParams();
  const post = getPost(slug);
  usePageTitle(post ? post.title : "Post not found");

  const back = (
    <Link
      to="/blog"
      className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:text-accent-hover hover:underline"
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      All posts
    </Link>
  );

  if (!post) {
    return (
      <Section bordered={false} className="min-h-[60vh]">
        {back}
        <h1 className="text-title mt-6 font-display font-bold text-fg">Post not found</h1>
        <p className="mt-3 max-w-xl text-muted">
          This post doesn’t exist or may have been moved.
        </p>
      </Section>
    );
  }

  return (
    <Section bordered={false}>
      {back}
      <article className="mx-auto mt-8 max-w-2xl">
        <p className="text-sm text-muted">
          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
          {post.author ? ` · ${post.author}` : ""}
        </p>
        <h1 className="text-display mt-3 font-display font-bold text-fg">{post.title}</h1>
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt=""
            className="mt-8 aspect-[16/9] w-full rounded-card border border-line object-cover"
          />
        )}
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-fg">
          {post.body.split(/\n{2,}/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
            {post.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        )}
      </article>
    </Section>
  );
}

export default MoreBlog;
