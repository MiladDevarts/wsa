"use client"

import BlogCard from "@/components/home/BlogCard"
import Overlay from "@/components/layout/Overlay"

import { MenuContext } from "@/context/MenuProvider"
import { useContext, useEffect } from "react"

import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link"


function page() {

  let menuVisibility = useContext(MenuContext)

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
    <>
      {
        menuVisibility.menu && <Overlay />
      }
      <section className='container flex flex-col lg:flex-row lg:justify-between gap-y-4 my-36'>
        <h1 data-aos-delay="400" data-aos="zoom-in-right" data-aos-duration="1000" className='text-4xl lg:text-8xl font-mono font-semibold text-white'>
          Blog
        </h1>
        <Link href="/blog/organic-shop" className="hover:cursor-pointer hover:bg-[#0C0C0C] transition-all duration-200 flex flex-col grow-0 gap-y-4 w-full lg:w-1/3 px-3 lg:px-8 border-b py-6 border-white/10 text-white font-sans short-item">
          <span className="font-light">
            14 June, 2023
          </span>
          <div className="flex items-center gap-x-2">
            <img src="/images/logos/circle-logo.svg" className="w-6" alt="" />
            <span className="text-sm font-semibold">
              WSA Board
            </span>
          </div>
          <h4 className="text-xl font-bold font-sans my-2">
            Organic/Green Online Shop Direct to Consumer (no plastics)
          </h4>
          <p className="text-[#8D8D8D] my-4">
            There is a huge consumer demand to get away from cheap mass manufacturing and plastic products.
          </p>
          <a href="/blog/organic-shop" className="flex items-center gap-x-2">
            Read more
            <svg width="15" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.44303 8L2.79688 7.35385L7.22764 2.92308H3.25841V2H8.79688V7.53846H7.8738V3.56923L3.44303 8Z" fill="white" />
            </svg>
          </a>
        </Link>
      </section>
      <section className="blog-container">

        <BlogCard
          image={""}
          title={"Educational Platforms"}
          summery={"Online learning has exploded since COVID leading consumers to become more and more familiar with online learning tools. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/educational-platforms"
        />

        <BlogCard
          image={"/images/blog/post-1-cover.webp"}
          title={"Advertising Platforms "}
          summery={"Unique audiences and communities have to ask themselves if the mainstream advertising giants have adequately met their particular needs while still respecting their privacy. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/advertising-platforms"
        />

        <BlogCard
          image={"/images/blog/post-5-cover.webp"}
          title={"Brand Development and Investment in Ideas"}
          summery={"Brand development starts with a quality product but needs much more to succeed in the competitive market. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/brand-development"
        />

        <BlogCard
          image={""}
          title={"Company Communication & Scheduling Platform"}
          summery={"Business apps are the leading way for employers to efficiently interact with their employees. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/company-communication"
        />

        <BlogCard
          image={""}
          title={"Performance Management"}
          summery={"For a concert, we think of everything, stage, sound, location, video, security, advertising, high quality, total package."}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/performance-management"
        />

      </section>
    </>
  )
}

export default page