import type { ReactNode } from "react";

export type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <main id="main" tabIndex={-1} className="outline-none">
      {children}
    </main>
  );
}

export default Main;
