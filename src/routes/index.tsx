import { Outlet } from "react-router-dom";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import ScrollToTop from "@/components/custom/ScrollToTop";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToHash from "@/components/layout/ScrollToHash";

function Root() {
  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-fg"
      >
        Skip to content
      </a>
      <ScrollToHash />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <ScrollToTop />
      <Footer />
    </MotionConfig>
    </LazyMotion>
  );
}

export default Root;
