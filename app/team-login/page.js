"use client"

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
      <section>
        1
      </section>
    </>
  )
}

export default page