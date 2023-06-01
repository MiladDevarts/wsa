
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import BrandSolgan from "@/components/home/BrandSolgan";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import IntroduceOne from "@/components/home/IntroduceOne";
import Price from "@/components/home/Price";
import Services from "@/components/home/Services";

export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <IntroduceOne />
      <Services />
      <BrandSolgan />
      <FAQ />
      <Price />
      <Blog />
      <Contact />
    </>
  )
}
