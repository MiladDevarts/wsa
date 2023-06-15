"use client"

import { useContext } from "react"

import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import BrandSolgan from "@/components/home/BrandSolgan";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import IntroduceOne from "@/components/home/IntroduceOne";
import Price from "@/components/home/Price";
import Services from "@/components/home/Services";
import Overlay from "@/components/layout/Overlay";

import { MenuContext } from "@/context/MenuProvider";
import Projects from "@/components/home/Projects";

export default function Home() {

  let menuVisibility = useContext(MenuContext)

  return (
    <>

      {
        menuVisibility.menu && <Overlay />
      }

      <Hero />
      <About />
      <IntroduceOne />
      <Services />
      <Projects/>
      <BrandSolgan />
      <FAQ />
      <Price />
      <Blog />
      <Contact />

    </>
  )
}

