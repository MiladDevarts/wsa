"use client"

import StampTwo from "@/components/StampTwo"
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
            <section className='py-10 lg:py-32 bg-right bg-contain bg-no-repeat' style={{ backgroundImage: `url('/images/about/about-bg.png')` }}>
                <div className="container">
                    <div className="flex justify-between items-center">
                        <h1 className='font-mono mb-24 text-4xl lg:text-8xl font-semibold text-white'>
                            About
                        </h1>
                        <StampTwo />
                    </div>
                    <div className="flex flex-col gap-y-10 text-white">
                        <h4 className="">
                            Welcome to
                            <a className="inline-block mx-2 -mt-2 font-mono border-b border-white/30">
                                White Snail America
                            </a>
                            company
                        </h4>
                        <p className="text-white max-w-lg">
                            We are a group that creates and manages innovative ideas with the help of industry experts. We also support ideas that preserve the biological balance of nature.                        </p>
                        <p className="text-zinc-300 max-w-4xl">
                            Contribute to new ideas and production, helping small and personal businesses and rebuilding them if needed and supporting to increase their sales, gives us a pleasant feeling. Our colleagues and specialists pursue common goals to increase the knowledge and health of people, and environment.                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page