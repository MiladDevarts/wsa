"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Button from "../Button"

function About() {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
    });
  }, []);

  useEffect(() => {
    Aos.refresh()
  }, [])

  return (
    <section className="w-full py-28 lg:py-48 bg-right-top bg-contain bg-no-repeat" style={{ backgroundImage: `url('/images/header/header-bg.png')` }} >
      <div className="container flex flex-col lg:flex-row gap-y-5">
        <div data-aos-delay="110" data-aos="zoom-in-down" className="lg:w-2/5 w-full flex flex-col gap-y-3 lg:-mt-20">
          <h3 className="text-white text-2xl lg:text-5xl font-bold flex gap-x-2">
            <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" width="6" height="24" transform="rotate(24.8486 25 0)" fill="white" />
              <rect x="11" width="6" height="24" transform="rotate(24.8486 11 0)" fill="#5F5F5F" />
            </svg>
            About us
          </h3>
          <p className="lg:text-4xl text-white font-sans">
            <span className="text-zinc-400 inline-block mr-1">
              Welcome
            </span>
            to White Snail
            <br />
            <span className="flex gap-x-2 items-center">
              America company.
              <svg width="15" height="21" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" width="6" height="24" transform="rotate(24.8486 25 0)" fill="white" />
                <rect x="11" width="6" height="24" transform="rotate(24.8486 11 0)" fill="#5F5F5F" />
              </svg>
            </span>
          </p>
        </div>
        <div data-aos-delay="200" data-aos="zoom-in-up" className="lg:w-3/5 w-full flex flex-col lg:items-end gap-y-4">
          <div className=" flex flex-col gap-y-4">
            <p className="lg:max-w-2xl lg:text-2xl font-sans text-zinc-400 ">
              We are
              <span className="text-white inline-block mx-1">a group</span>
               that creates and manages innovative ideas with the help of industry experts. We also support ideas that preserve the biological balance of nature.
            </p>
            <Button content={"About us"} link={"/about"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About