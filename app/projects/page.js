"use client"

import { MenuContext } from "@/context/MenuProvider"
import { useContext } from "react"

import Overlay from "@/components/layout/Overlay";

import Button from "@/components/Button"

function page() {

  let menuVisibility = useContext(MenuContext)

  return (
    <>
      {
        menuVisibility.menu && <Overlay />
      }
      <section className='container my-5 flex flex-col lg:flex-row gap-y-10 lg:gap-x-4 h-screen' >
        <div className="lg:w-2/3 w-full flex flex-col gap-y-14 text-white">
          <h1 className="flex items-center gap-x-4 font-mono text-6xl font-bold mt-36">
            Projects
            <span className="text-[#2D2D2] text-3xl">
              01
            </span>
          </h1>
          <p>
            Providing a multipurpose educational platform
          </p>
          <p>
            We believe that education is the foundation for a better future. This platform is designed to provide high-quality educational resources to learners of all ages and backgrounds
          </p>
          <Button content="Full project" link="/" />
        </div>
        <div className="lg:w-1/3 w-full bg-white h-full bg-cover rounded-3xl" style={{ backgroundImage: `url('/images/projects/preview-1.jpg')` }}>

        </div>
      </section>
    </>
  )
}

export default page