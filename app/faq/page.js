"use client"

import FAQItem from "@/components/home/FAQItem"
import { FAQ as FAQData } from "@/data/dummy"
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function page() {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    Aos.refresh()
  }, [])

  return (
    <>
      <section className='container my-36'>
        <h1 data-aos-delay="400" data-aos="zoom-in-right" data-aos-duration="1000" className='text-4xl lg:text-8xl font-mono font-semibold text-white'>
          FAQ
        </h1>
      </section>
      <section className="container flex flex-col items-center gap-y-6 my-6">
        {
          FAQData.map((item) => {
            return <FAQItem title={item.title} content={item.content} />
          })
        }
      </section>
    </>
  )
}

export default page