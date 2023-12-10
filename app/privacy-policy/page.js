"use client";

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { MenuContext } from "@/context/MenuProvider";
import { useContext } from "react";

import Overlay from "@/components/layout/Overlay";

function page() {
  let menuVisibility = useContext(MenuContext);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <>
      {menuVisibility.menu && <Overlay />}
      <section className="container my-36">
        <div className="flex flex-col gap-y-6 mb-24">
          <h1
            data-aos-delay="400"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="text-4xl lg:text-8xl font-mono font-semibold text-white"
          >
            Privacy policy
          </h1>
          <p className="text-[#B5B5B5] my-10">Last Updated December, 2023</p>
        </div>
      </section>
      <div className="">
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
          1. White Snail America LLC 
          <span className="mx-2 text-white">(“WSA”)</span>
           does not collect any “personal
          data” from any user that visits our website, www.wsa.team, and does
          not track your usage in any way.
        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
        2. WSA does not partner with any third party to collect user “personal
          data” or track user usage in any way.
        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
        3. We only use cookies that are essential to run this website.

        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
        4. Volunteered information such as an email address used for
          communication will be stored only for communication purposes. Email
          information is not required.
        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
        5. We may request your email address to communicate with you
        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
        6. A request to remove your email from our possession will be responded to within 30 days.
        </p>
      </div>

    </>
  );
}

export default page;
