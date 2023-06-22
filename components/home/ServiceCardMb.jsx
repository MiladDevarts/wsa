"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Link from "next/link"

function ServiceCardMb({ servicelink, serviceTitle , serviceSummery, serviceImage}) {

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
        <Link href={servicelink} className="keen-slider__slide font-sans text-white w-5/6 p-10 flex lg:hidden flex-col gap-y-12 rounded-2xl border 
    border-white/20">
            <h4 className="text-xl">
                {serviceTitle}
            </h4>
            <img src={serviceImage} className="w-24 self-center" alt="" />
            <p className="text-[#C8C8C8] text-xl">
                {serviceSummery}
            </p>

        </Link>
    )
}

export default ServiceCardMb