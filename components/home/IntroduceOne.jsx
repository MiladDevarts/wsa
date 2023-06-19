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
        <section className="py-32 lg:py-48 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/images/header/introduce-bg.webp')` }}>
            <div className="container flex justify-center">
                <h2 data-aos="zoom-out-left" className="max-w-3xl flex flex-col gap-y-3 items-right text-3xl lg:text-5xl text-white font-mono font-extrabold lg:font-semibold">
                    <div>
                        Like the snails we
                    </div>
                    <div className="flex gap-x-2">
                        raise and
                        <span className="font-extrabold text-shadow">nature</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                        with care
                        <svg className="lg:w-20" width="24" height="24" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60962 51.1017L0.119141 45.6112L37.7682 7.9622H4.04091V0.118652H51.1022V47.1799H43.2586V13.4527L5.60962 51.1017Z" fill="white" />
                        </svg>
                    </div>
                </h2>
            </div>
        </section>
    )
}

export default IntroduceOne