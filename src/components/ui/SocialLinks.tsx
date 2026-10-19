import type { ReactElement } from "react";
import { socials, type SocialId } from "@/data/site";
import { cn } from "@/utils/cn";

const paths: Record<SocialId, string> = {
  github:
    "M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z",
  linkedin:
    "M22.23 0H1.77C.792 0 0 .793 0 1.77v20.459C0 23.207.792 24 1.77 24h20.459c.978 0 1.77-.793 1.77-1.771V1.771C24 .793 23.208 0 22.23 0zM7.19 20.339H3.561V9.006H7.19v11.333zm-1.815-12.9c-1.17 0-1.91-.784-1.91-1.751 0-.992.755-1.751 1.949-1.751 1.194 0 1.911.758 1.911 1.751 0 .967-.717 1.751-1.95 1.751zm15.229 12.9h-3.626V15.13c0-1.236-.442-2.08-1.548-2.08-.844 0-1.346.57-1.566 1.119-.08.2-.099.479-.099.758v5.413H9.812s.046-8.779 0-9.694h3.626v1.373c.482-.746 1.341-1.809 3.27-1.809 2.387 0 4.174 1.563 4.174 4.924v6.206z",
  x: "M17.53 3H21L14.42 10.29 22.14 21H15.66L10.87 14.62 5.56 21H2L9.03 13.21 1.61 3H8.24L12.59 8.84 17.53 3ZM16.34 19H18.14L7.76 5H5.87L16.34 19Z",
  facebook:
    "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.482v-9.294H9.694v-3.622h3.113V8.413c0-3.1 1.893-4.786 4.659-4.786 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.762v2.311h3.589l-.467 3.622h-3.122V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0z",
  tiktok:
    "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
};

function SocialIcon({ id }: { id: SocialId }): ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-5"
    >
      <path d={paths[id]} />
    </svg>
  );
}

type SocialLinksProps = { className?: string };

/** Icon-only links with accessible names. 44px touch targets. */
function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {socials.map((s) => (
        <li key={s.id}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} (opens in a new tab)`}
            title={s.label}
            className="inline-flex size-11 items-center justify-center rounded-control border border-line text-muted transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            <SocialIcon id={s.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
