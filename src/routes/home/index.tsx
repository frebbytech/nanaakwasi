import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Services from "@/components/home/Services";
import Expertise from "@/components/home/Expertise";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Expertise />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;
