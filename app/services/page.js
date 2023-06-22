"use client"

import Overlay from "@/components/layout/Overlay";
import TabContent from "@/components/services/TabContent";

import { services } from "@/data/dummy";
import { useEffect, useState } from "react";

import { MenuContext } from "@/context/MenuProvider"
import { useContext } from "react"

import Aos from "aos";
import "aos/dist/aos.css";

function page() {

  const [openTab, setOpenTab] = useState(1);
  let menuVisibility = useContext(MenuContext)

  useEffect(() => {
    Aos.init({
      offset: -100,
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
      <section className='py-10 lg:py-32 bg-right bg-contain bg-no-repeat'>
        <div className="">
          <div className="container">
            <h1 data-aos-delay="400" data-aos="zoom-in-right" data-aos-duration="1000" className='mb-24 text-4xl lg:text-8xl font-semibold text-white font-mono'>
              Services
            </h1>
          </div>
          <div className="flex flex-col gap-y-10 text-white">
            <div className="container mx-auto mt-12">
              <div className={`flex flex-col items-center justify-center w-full`}>
                <ul data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000" className="w-full hidden lg:flex justify-between mb-10">
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenTab(1)}
                      className={` ${openTab === 1 ? "text-white" : ""} duration-200 transition-all inline-block px-4 py-2 rounded shadow`}
                    >
                      Platform Building
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenTab(2)}
                      className={` ${openTab === 2 ? "text-white" : ""} duration-200 transition-all inline-block px-4 py-2 rounded shadow`}
                    >
                      Brand Development

                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenTab(3)}
                      className={` ${openTab === 3 ? "text-white" : ""} duration-200 transition-all inline-block px-4 py-2 rounded shadow`}
                    >
                      Multipurpose Educational Platform

                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenTab(4)}
                      className={` ${openTab === 4 ? "text-white" : ""} duration-200 transition-all inline-block px-4 py-2 rounded shadow`}
                    >
                      Performance management
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenTab(5)}
                      className={` ${openTab === 5 ? "text-white" : ""} duration-200 transition-all inline-block px-4 py-2 rounded shadow`}
                    >
                      Art Management

                    </a>
                  </li>
                </ul>
                <details class="lg:hidden dropdown mb-2 w-full bg-[#1b1b1b] z-50">
                  <summary class="m-1 btn w-full">Build platforms</summary>
                  <ul class="p-4 shadow menu dropdown-content bg-base-100 rounded-box w-full">
                    <li><a href="#serviceBox" onClick={() => setOpenTab(1)}>Platform Building</a></li>
                    <li><a onClick={() => setOpenTab(2)}>Brand Development</a></li>
                    <li><a onClick={() => setOpenTab(3)}>Multipurpose Educational Platform</a></li>
                    <li><a onClick={() => setOpenTab(4)}>Performance management</a></li>
                    <li><a onClick={() => setOpenTab(5)}>Art Management</a></li>
                  </ul>
                </details>
                <div id="serviceBox" className="w-full p-3 mt-6">
                  {
                    services.map((item) => {
                      return <TabContent key={item.id} openTab={openTab} id={item.id} title={item.title} content={item.content} image={item.image} />
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page