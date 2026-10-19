import { Link } from "react-router-dom";
import { formatPostDate, type Post } from "@/data/posts";
import Tag from "@/components/ui/Tag";

function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col border-t border-line pt-6">
      <p className="text-sm text-muted">
        <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
        {post.author ? ` · ${post.author}` : ""}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold text-fg">
        <Link
          to={`/blog/${post.slug}`}
          className="underline-offset-4 hover:text-accent hover:underline"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-muted">{post.excerpt}</p>
      {post.tags && post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
          {post.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default PostCard;
