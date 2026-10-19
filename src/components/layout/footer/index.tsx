import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
import { contact, navItems, site } from "@/data/site";

function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold text-fg">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            {site.title} building web, mobile and desktop applications, based in{" "}
            {site.location}.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-fg">Explore</p>
          <ul className="mt-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to={{ pathname: "/", hash: `#${item.hash}` }}
                  className="inline-flex min-h-9 items-center text-sm text-muted hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/portfolio"
                className="inline-flex min-h-9 items-center text-sm text-muted hover:text-accent"
              >
                All projects
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold text-fg">Get in touch</p>
          <p className="mt-3 text-sm">
            <a
              href={`mailto:${contact.primaryEmail}`}
              className="text-muted underline-offset-4 hover:text-accent hover:underline"
            >
              {contact.primaryEmail}
            </a>
          </p>
          <SocialLinks className="mt-4" />
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="py-5">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
