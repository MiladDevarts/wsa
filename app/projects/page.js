"use client"

import { MenuContext } from "@/context/MenuProvider"
import { useContext, useEffect, useState } from "react"

import Overlay from "@/components/layout/Overlay";

import Button from "@/components/Button"

import Aos from "aos";
import "aos/dist/aos.css";

function page() {

  let [projectindicator, setProjectIndicator] = useState(1)

  let menuVisibility = useContext(MenuContext)

  let handlePrevProject = () => {
    if (projectindicator === 1) {
      setProjectIndicator(3)
    } else {
      setProjectIndicator(projectindicator - 1)
    }
  }
  let handleNextProject = () => {
    if (projectindicator === 3) {
      setProjectIndicator(1)
    } else {
      setProjectIndicator(projectindicator + 1)
    }
  }

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

      <section className='container my-5 flex flex-col lg:flex-row gap-y-10 lg:gap-x-28 h-screen' >

        <div className="lg:w-2/3 w-full">

          {/* Project 1 (Content) */}
          {
            projectindicator === 1 &&
            <div data-aos-delay="100" data-aos="fade-right" data-aos-duration="1000" className="w-full  flex flex-col gap-y-14 text-white">
              <h1 className="flex items-center gap-x-4 font-mono text-5xl lg:text-6xl font-bold mt-10">
                Projects
                <span className="text-[#2D2D2D] text-3xl">
                  01
                </span>
              </h1>
              <div className="flex lg:hidden flex-col gap-y-3 mt-5">
                <div className="flex justify-between ">
                  <div className="flex gap-x-3">
                    <svg className="cursor-pointer" onClick={() => { handlePrevProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L13.425 18.6L7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20Z" fill="white" /> </svg>
                    <span className="inline-block ml-4 font-bold text-xl text-white font-mono"> 01 </span>
                  </div>
                  <svg className="cursor-pointer" onClick={() => { handleNextProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z" fill="white" /> </svg>
                </div>
                <div className="relative top-0 left-0 w-full h-1 bg-white/20">
                  <div className="absolute top-0 left-o w-1/3 h-full bg-white"> </div>
                </div>
              </div>
              <p>
                Providing a
                <span className="inline-block px-3 py-2 border-b border-white">
                  Multipurpose
                </span>
                Educational Platform
              </p>
              <p className="font-light">
                We believe that education is the foundation for a better future. This platform is designed to provide high-quality educational resources for learners of all ages and backgrounds. All educators, artists, and field experts can sell their education courses on this platform or share their courses with other teachers for free.
              </p>
              <Button content="Full project" link="/projects/1" />
              <div className="hidden lg:flex flex-col gap-y-3 mt-20">
                <div className="flex justify-between ">
                  <div className="flex gap-x-3">
                    <svg className="cursor-pointer" onClick={() => { handlePrevProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L13.425 18.6L7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20Z" fill="white" /> </svg>
                    <span className="inline-block ml-4 font-bold text-xl text-white font-mono"> 01 </span>
                  </div>
                  <svg className="cursor-pointer" onClick={() => { handleNextProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z" fill="white" /> </svg>
                </div>
                <div className="relative top-0 left-0 w-full h-1 bg-white/20">
                  <div className="absolute top-0 left-o w-1/3 h-full bg-white"> </div>
                </div>
              </div>
            </div>
          }

          {/* Project 2 (Content) */}
          {
            projectindicator === 2 &&
            <div id="project_2" data-aos-delay="100" data-aos="fade-left" data-aos-duration="1000" className="w-full  flex flex-col gap-y-14 text-white">
              <h1 className="flex items-center gap-x-4 font-mono text-5xl lg:text-6xl font-bold mt-10">
                Projects
                <span className="text-[#2D2D2D] text-3xl">
                  02
                </span>
              </h1>
              <div className="flex lg:hidden flex-col gap-y-3 mt-20">
                <div className="flex justify-between ">
                  <div className="flex gap-x-3">
                    <svg className="cursor-pointer" onClick={() => { handlePrevProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L13.425 18.6L7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20Z" fill="white" /> </svg>
                    <span className="inline-block ml-4 font-bold text-xl text-white font-mono"> 02 </span>
                  </div>
                  <svg className="cursor-pointer" onClick={() => { handleNextProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z" fill="white" /> </svg>
                </div>
                <div className="relative top-0 left-0 w-full h-1 bg-white/20">
                  <div className="absolute top-0 left-1/2 w-1/3 h-full bg-white -translate-x-1/2"> </div>
                </div>
              </div>
              <p>
                Providing a
                <span className="inline-block px-3 py-2 border-b border-white">
                  Multipurpose
                </span>
                learning platform
              </p>
              <p className="font-light">
              At WSA, we contribute to new ideas and production - helping small businesses and professionals. We can assist new businesses launch, rebuild existing brands, and help increase sales. In addition, our partners and specialists pursue the common goal of increasing the natural health of people and the environment.
              </p>
              <div className="hidden lg:flex flex-col gap-y-3 mt-20">
                <div className="flex justify-between ">
                  <div className="flex gap-x-3">
                    <svg className="cursor-pointer" onClick={() => { handlePrevProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L13.425 18.6L7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20Z" fill="white" /> </svg>
                    <span className="inline-block ml-4 font-bold text-xl text-white font-mono"> 02 </span>
                  </div>
                  <svg className="cursor-pointer" onClick={() => { handleNextProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z" fill="white" /> </svg>
                </div>
                <div className="relative top-0 left-0 w-full h-1 bg-white/20">
                  <div className="absolute top-0 left-1/2 w-1/3 h-full bg-white -translate-x-1/2"> </div>
                </div>
              </div>
            </div>
          }

          {/* Project 3 (Content) */}
          {projectindicator === 3 &&
            <div data-aos-delay="100" data-aos="fade-right" data-aos-duration="1000" className="w-full  flex flex-col gap-y-14 text-white">
              <h1 className="flex items-center gap-x-4 font-mono text-5xl lg:text-6xl font-bold mt-10">
                Projects
                <span className="text-[#2D2D2D] text-3xl">
                  03
                </span>
              </h1>
              <div className="flex lg:hidden flex-col gap-y-3 mt-20">
                <div className="flex justify-between ">
                  <div className="flex gap-x-3">
                    <svg className="cursor-pointer" onClick={() => { handlePrevProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L13.425 18.6L7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20Z" fill="white" /> </svg>
                    <span className="inline-block ml-4 font-bold text-xl text-white font-mono"> 03 </span>
                  </div>
                  <svg className="cursor-pointer" onClick={() => { handleNextProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z" fill="white" /> </svg>
                </div>
                <div className="relative top-0 left-0 w-full h-1 bg-white/20">
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-white"> </div>
                </div>
              </div>
              <p>
                Providing a
                <span className="inline-block px-3 py-2 border-b border-white">
                  Marketplace
                </span>
                Platform
              </p>
              <p className="font-light">
                We understand that starting an online business can be daunting, so we strive to provide a user-friendly platform with all the tools and resources you need to succeed. Whether you're a seasoned entrepreneur or just starting out, our platform makes it easy to list and sell your products, manage orders, and connect with customers.
              </p>
              <div className="hidden lg:flex flex-col gap-y-3 mt-20">
                <div className="flex justify-between ">
                  <div className="flex gap-x-3">
                    <svg className="cursor-pointer" onClick={() => { handlePrevProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L13.425 18.6L7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20Z" fill="white" /> </svg>
                    <span className="inline-block ml-4 font-bold text-xl text-white font-mono"> 03 </span>
                  </div>
                  <svg className="cursor-pointer" onClick={() => { handleNextProject() }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z" fill="white" /> </svg>
                </div>
                <div className="relative top-0 left-0 w-full h-1 bg-white/20">
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-white"> </div>
                </div>
              </div>
            </div>}

        </div>

        {
          projectindicator === 1 &&
          <div data-aos-delay="100" data-aos="fade-down" data-aos-duration="1000" className="lg:w-1/3 w-full bg-white h-full bg-cover rounded-3xl" style={{ backgroundImage: `url('/images/projects/preview-1.jpg')` }}></div>
        }

        {
          projectindicator === 2 &&
          <div data-aos-delay="100" data-aos="fade-up" data-aos-duration="1000" className="lg:w-1/3 w-full bg-white h-full bg-cover rounded-3xl" style={{ backgroundImage: `url('/images/projects/preview-2.jpg')` }}></div>
        }

        {
          projectindicator === 3 &&
          <div data-aos-delay="100" data-aos="fade-down" data-aos-duration="1000" className="lg:w-1/3 w-full bg-white h-full bg-cover rounded-3xl" style={{ backgroundImage: `url('/images/projects/preview-3.jpg')` }}></div>
        }

      </section>

    </>
  )
}

export default page