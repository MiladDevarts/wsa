"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function IntroduceOne() {

    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
            duration: 600
        });
    }, []);

    useEffect(() => {
        Aos.refresh()
    }, [])


    return (
        <>
            <section className="hidden lg:block py-32 lg:py-48 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/images/header/introduce-bg.png')` }}>
                <div className="container flex justify-center">
                    <h2 data-aos="zoom-out-left" className="max-w-4xl flex flex-col gap-y-7 items-right text-3xl lg:text-4xl text-white font-mono font-extrabold lg:font-semibold mb-20">
                        <div>
                            Like the snail, we
                        </div>
                        <div className="flex gap-x-2">
                            revitalize
                            <span className="font-extrabold text-shadow">nature with</span>
                        </div>
                        <div className="flex items-center gap-x-4">
                             every measured step
                            <svg className="lg:w-20" width="24" height="24" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.60962 51.1017L0.119141 45.6112L37.7682 7.9622H4.04091V0.118652H51.1022V47.1799H43.2586V13.4527L5.60962 51.1017Z" fill="white" />
                            </svg>
                        </div>
                    </h2>
                </div>
            </section>
            <section className="block lg:hidden py-32 lg:py-48 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('/images/header/introduce-bg-mb.png')` }}>
                <div className="container flex justify-center">
                    <h2 data-aos="zoom-out-left" className="max-w-5xl flex flex-col gap-y-2 items-right text-xl lg:text-6xl text-white font-mono font-extrabold lg:font-semibold">
                        <div>
                            Like the snail, we
                        </div>
                        <div className="flex gap-x-2">
                           revitalize
                            <span className="font-extrabold text-shadow">nature</span>
                        </div>
                        <div className="flex items-center gap-x-4">
                            with every
                            <svg className="lg:w-20" width="24" height="24" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.60962 51.1017L0.119141 45.6112L37.7682 7.9622H4.04091V0.118652H51.1022V47.1799H43.2586V13.4527L5.60962 51.1017Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                        measured step
                        </div>
                    </h2>
                </div>
            </section>
        </>
    )
}

export default IntroduceOne