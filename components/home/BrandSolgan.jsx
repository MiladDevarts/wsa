"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function BrandSolgan() {
    return (
        <section className="flex flex-col items-center py-60 lg:py-48 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/images/brand/solgan-bg.png')` }}>
            <div className="container">
                <h2 className="flex flex-col gap-y-8 items-center text-2xl lg:text-6xl text-white font-mono font-extrabold lg:font-semibold">
                    <div data-aos-delay="200" data-aos="fade-in" data-aos-duration="1000">
                        Snails
                        <span className="inline-block mx-1 font-thin">slow</span>
                        and
                    </div>
                    <div className="flex gap-x-2" data-aos-delay="300" data-aos="fade-in" data-aos-duration="1000">
                        <span className="inline-block mx-1 font-thin">steady</span>
                        wins
                    </div>
                    <div className="flex gap-x-4" data-aos-delay="400" data-aos="fade-in" data-aos-duration="1000">
                        the race.
                    </div>
                </h2>
            </div>
        </section>
    )
}

export default BrandSolgan