
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import IntroduceOne from "@/components/home/IntroduceOne";
import Services from "@/components/home/Services";

export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <IntroduceOne />
      <Services />
      <Blog />
      <Contact />
    </>
  )
}
