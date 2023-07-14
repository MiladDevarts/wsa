"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {

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
        <section className="flex flex-col items-center py-20 lg:py-48 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/images/header/header-bg.png')` }}>
            <div data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000" className="container">
                <h2 className="flex flex-col gap-y-3 items-center text-2xl lg:text-5xl text-white font-mono font-extrabold lg:font-semibold">
                    <div>
                        LET'S DISCUSS
                    </div>
                    <div className="flex gap-x-2">
                        HOW we can be
                    </div>
                    <div className="flex gap-x-4">
                        useful to you
                    </div>
                </h2>
            </div>
            <section className='container flex justify-center py-8'>
                <div className='w-full lg:w-1/2 flex h-20 border border-white/20 p-2 rounded-3xl'>
                    <input type="text" className='w-4/6 lg:w-5/6  h-full bg-transparent text-white pl-2 focus:outline-none' placeholder='Your E-mail' />
                    <input type="submit" className='flex items-center justify-center w-2/6 lg:2-1/6 h-full rounded-2xl bg-white text-black font-sans' />
                </div>
            </section>
        </section>
    )
}

export default Contact