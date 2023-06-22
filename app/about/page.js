"use client"

import StampTwo from "@/components/StampTwo"
import Overlay from "@/components/layout/Overlay"

import { MenuContext } from "@/context/MenuProvider"
import { useContext, useEffect } from "react"

import Aos from "aos";
import "aos/dist/aos.css";

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
            <section className='py-10 lg:py-32 bg-right bg-half lg:bg-contain bg-no-repeat' style={{ backgroundImage: `url('/images/about/about-bg.png')` }}>
                <div className="container">
                    <div data-aos-delay="400" data-aos="zoom-in-right" data-aos-duration="1000" className="flex justify-between items-center">
                        <h1 className='font-mono mb-24 text-4xl lg:text-8xl font-semibold text-white'>
                            About
                        </h1>
                        <StampTwo />
                    </div>
                    <div className="flex flex-col gap-y-10 text-white">
                        <h4 className="text-xs lg:text-2xl mb-10">
                            Welcome to
                            <a className="inline-block mx-2 -mt-2 font-mono border-b border-white/30">
                                White Snail America
                            </a>
                            company
                        </h4>
                        <p className="text-white max-w-lg text-lg">
                            We are a group that creates and manages innovative ideas with the help of industry experts. We also support ideas that preserve the biological balance of nature.                        </p>
                        <p className="text-zinc-300 max-w-4xl text-lg">
                            Contribute to new ideas and production, helping small and personal businesses and rebuilding them if needed and supporting to increase their sales, gives us a pleasant feeling. Our colleagues and specialists pursue common goals to increase the knowledge and health of people, and environment.                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page