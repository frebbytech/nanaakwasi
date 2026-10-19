import Section from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { usePageTitle } from "@/hooks/usePageTitle";

function NotFound() {
  usePageTitle("Page not found");
  return (
    <Section bordered={false} className="min-h-[60vh]">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">404</p>
      <h1 className="text-display mt-3 font-display font-bold text-fg">Page not found</h1>
      <p className="text-lead mt-5 max-w-xl text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink to="/" size="lg">Back to home</ButtonLink>
        <ButtonLink to="/portfolio" variant="secondary" size="lg">View projects</ButtonLink>
      </div>
    </Section>
  );
}

export default NotFound;
