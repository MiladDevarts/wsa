"use client"

import TabContent from "@/components/services/TabContent";
import { services } from "@/data/dummy";
import { useState } from "react";

function page() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <section className='py-10 lg:py-32 bg-right bg-contain bg-no-repeat' style={{ backgroundImage: `url('/images/about/about-bg.png')` }}>
        <div className="">
          <div className="container">
            <h1 className='mb-24 text-4xl lg:text-8xl font-semibold text-white'>
              Services
            </h1>
          </div>
          <div className="flex flex-col gap-y-10 text-white">
            <div className="container mx-auto mt-12">
              <div className="flex flex-col items-center justify-center w-full font-sans">
                <ul className="w-full hidden lg:flex justify-between">
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenTab(1)}
                      className={` ${openTab === 1 ? "text-white" : ""} duration-200 transition-all inline-block px-4 py-2 rounded shadow`}
                    >
                      Build platforms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenTab(2)}
                      className={` ${openTab === 2 ? "text-white" : ""} duration-200 transition-all inline-block px-4 py-2 rounded shadow`}
                    >
                      Invest in Ideas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpenTab(3)}
                      className={` ${openTab === 3 ? "text-white" : ""} duration-200 transition-all inline-block px-4 py-2 rounded shadow`}
                    >
                      Art Management
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
                      Brand Development
                    </a>
                  </li>
                </ul>
                <details class="lg:hidden dropdown mb-2 w-full bg-[#0C0C0C]">
                  <summary class="m-1 btn w-full">Build platforms</summary>
                  <ul class="p-4 shadow menu dropdown-content bg-base-100 rounded-box w-full">
                    <li><a onClick={() => setOpenTab(1)}>Build platforms</a></li>
                    <li><a onClick={() => setOpenTab(2)}>Invest in Ideas</a></li>
                    <li><a onClick={() => setOpenTab(3)}>Art Management</a></li>
                    <li><a onClick={() => setOpenTab(4)}>Performance management</a></li>
                    <li><a onClick={() => setOpenTab(5)}>Brand Development</a></li>
                  </ul>
                </details>
                <div className="w-full p-3 mt-6">
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