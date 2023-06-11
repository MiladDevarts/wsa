"use client"

import BlogCard from "@/components/home/BlogCard"
import Overlay from "@/components/layout/Overlay"

import { MenuContext } from "@/context/MenuProvider"
import { useContext } from "react"

function page() {

  let menuVisibility = useContext(MenuContext)

  return (
    <>
      {
        menuVisibility.menu && <Overlay />
      }
      <section className='container flex flex-col lg:flex-row lg:justify-between gap-y-4 my-36'>
        <h1 data-aos-delay="400" data-aos="zoom-in-right" data-aos-duration="1000" className='text-4xl lg:text-8xl font-mono font-semibold text-white'>
          Blog
        </h1>
        <div className="hover:cursor-pointer hover:bg-[#0C0C0C] transition-all duration-200 flex flex-col grow-0 gap-y-4 w-full lg:w-1/3 px-3 lg:px-8 border-b py-6 border-white/10 text-white font-sans short-item">
          <span className="font-light">
            11 December, 2022
          </span>
          <div className="flex items-center gap-x-2">
            <img src="./images/profile/avatar-1.png" className="w-6" alt="" />
            <span className="text-sm font-semibold">
              author
            </span>
          </div>
          <h4 className="text-xl font-bold font-sans my-2">
            WSA will start getting Clients
          </h4>
          <p className="text-[#8D8D8D] my-4">
            WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients
          </p>
          <a href="#" className="flex items-center gap-x-2">
            Read more
            <svg width="15" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.44303 8L2.79688 7.35385L7.22764 2.92308H3.25841V2H8.79688V7.53846H7.8738V3.56923L3.44303 8Z" fill="white" />
            </svg>
          </a>
        </div>
      </section>
      <section className="blog-container">
        <BlogCard
          image={""}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"} />
        <BlogCard
          image={"./images/blog/thumbnail-1.png"}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"} />
        <BlogCard
          image={"./images/blog/thumbnail-1.png"}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"} />
      </section>
    </>
  )
}

export default page