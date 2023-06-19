"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Link from "next/link"

function ServiceCard({ animationDelay, showData, showBtn, servicelink, serviceTitle }) {

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
        <Link data-aos-delay={animationDelay} data-aos="zoom-out-right" href={servicelink} className="font-sans text-white w-full p-8 flex flex-col gap-y-10 rounded-2xl border 
    border-white/20">
            <h4 className="text-xl">
                {serviceTitle}
            </h4>
            {
                showData && <>
                    <img src="/images/service/build-platforms.webp" className="w-28 self-center" alt="" />
                    <p className="text-zinc-400">
                        We assist businesses, individuals, and institutions develop scalable web solutions, designs and interoperable content while assessing and managing privacy and security risks.
                    </p>
                </>
            }
            {
                showBtn && <Link href="/" className="flex justify-center items-center w-24 h-24 rounded-full bg-white">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.93846 25L7 23.0615L20.2923 9.76923H8.38462V7H25V23.6154H22.2308V11.7077L8.93846 25Z" fill="black" />
                    </svg>

                </Link>
            }
        </Link>
    )
}

export default ServiceCard