import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Container from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/button-styles";

/**
 * Rendered outside the normal layout (the layout itself may have failed),
 * so it uses plain anchors for a full reload rather than router links.
 */
function ErrorPage() {
  const error = useRouteError();
  if (import.meta.env.DEV) console.error(error);

  const detail = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : null;

  return (
    <main className="flex min-h-dvh items-center bg-bg">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          {detail ?? "Error"}
        </p>
        <h1 className="text-display mt-3 font-display font-bold text-fg">
          Something went wrong
        </h1>
        <p className="text-lead mt-5 max-w-xl text-muted">
          An unexpected error stopped this page from loading. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className={buttonStyles({ size: "lg" })}
          >
            Reload page
          </button>
          <a href="/" className={buttonStyles({ variant: "secondary", size: "lg" })}>
            Back to home
          </a>
        </div>
      </Container>
    </main>
  );
}

export default ErrorPage;
