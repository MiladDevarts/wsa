"use client"

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
                <ul className="w-full flex justify-between">
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
                <div className="w-full p-3 mt-6">
                  <div className={openTab === 1 ? "flex w-full justify-between" : "hidden"}>
                    <div className="flex flex-col p-20 rounded-3xl gap-y-4 w-2/3 bg-zinc-900 transition-all duration-200">
                      <h3 className="text-2xl my-4">
                        Build platforms
                      </h3>
                      <p className="mb-4 text-xl font-light text-[#C8C8C8] leading-10">
                        We assist businesses, individuals, and institutions develop scalable web solutions, designs and interoperable content while assessing and managing privacy and security risks.
                      </p>
                    </div>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"}>
                    <div className="flex flex-col p-20 rounded-3xl gap-y-4 w-2/3 bg-zinc-900 transition-all duration-200">
                      <h3 className="text-2xl my-4">
                        Invest in Ideas
                      </h3>
                      <p className="mb-4 text-xl font-light text-[#C8C8C8] leading-10">
                        We support your ideas for innovation, commerce, communication, entertainment, conservation, and education. Our goal is to assist your energy, creativity, and dedication blossom into a powerful force.                      </p>
                    </div>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"}>
                    <div className="flex flex-col p-20 rounded-3xl gap-y-4 w-2/3 bg-zinc-900 transition-all duration-200">
                      <h3 className="text-2xl my-4">
                        Art Management
                      </h3>
                      <p className="mb-4 text-xl font-light text-[#C8C8C8] leading-10">
                        Serve as a buffer between the artist and the business. Represent the artist and prioritize the artist’s best interests. Create marketing strategies to promote artists and their work. Negotiate prospective business deals. Secure and market gigs and performances.
                      </p>
                    </div>
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"}>
                    <div className="flex flex-col p-20 rounded-3xl gap-y-4 w-2/3 bg-zinc-900 transition-all duration-200">
                      <h3 className="text-2xl my-4">
                        Performance Management
                      </h3>
                      <p className="mb-4 text-xl font-light text-[#C8C8C8] leading-10">
                        Serve as a buffer between the artist and the business. Represent the artist and prioritize the artist’s best interests. Create marketing strategies to promote artists and their work. Negotiate prospective business deals. Secure and market gigs and performances.
                      </p>
                    </div>
                  </div>
                  <div className={openTab === 5 ? "block" : "hidden"}>
                    <div className="flex flex-col p-20 rounded-3xl gap-y-4 w-2/3 bg-zinc-900 transition-all duration-200">
                      <h3 className="text-2xl my-4">
                        Brand Development
                      </h3>
                      <p className="mb-4 text-xl font-light text-[#C8C8C8] leading-10">
                        Serve as a buffer between the artist and the business. Represent the artist and prioritize the artist’s best interests. Create marketing strategies to promote artists and their work. Negotiate prospective business deals. Secure and market gigs and performances.
                      </p>
                    </div>
                  </div>
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