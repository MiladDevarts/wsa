"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Price() {

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
        <section className="hidden lg:flex flex-col justify-center items-center w-full py-64 my-4  bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('/images/brand/price-bg.jpg')` }}>
            <div data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000" className="w-4/6 lg:w-1/6 h-10 rounded-t-2xl bg-white text-black font-sans flex justify-center items-center">
                Today price
            </div>
            <div data-aos-delay="400" data-aos="fade-up" data-aos-duration="1000" className="flex justify-between gap-x-4 w-5/6 lg:w-1/5 p-4 h-36 rounded-3xl bg-black/30 backdrop-blur-xl">
                ‍‍<div className="flex flex-col gap-y-2 w-4/6">
                    <span className="flex items-center h-1/2 font-sans text-zinc-400">
                        7d Low / 7d High
                    </span>
                    <span className="font-sans font-bold text-lg s text-white">
                        $19.95 / $25.43
                    </span>
                </div>
                ‍‍<div className="flex flex-col gap-y-2 w-2/6 h-full">
                    <span className="flex items-center h-1/2 font-sans text-lg text-red-500 font-normal">
                        +2.04%
                    </span>
                    <svg width="91" viewBox="0 0 124 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2.21947L4.38889 1.49197C7.77778 0.764464 14.5556 -0.69054 21.3333 10.4411C28.1111 21.5728 34.8889 45.2912 41.6667 46.9095C48.4444 48.5278 55.2222 28.0461 62 17.1325C68.7778 6.21886 75.5556 4.87343 82.3333 11.3387C89.1111 17.8039 95.8889 32.0799 102.667 35.9721C109.444 39.8644 116.222 33.373 119.611 30.1273L123 26.8816" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </section>
        <section className="lg:hidden flex flex-col justify-center items-center w-full py-64 my-20  bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('/images/brand/price-bg-mb.jpg')` }}>
            <div data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000" className="w-2/6 lg:w-1/6 h-10 rounded-t-2xl bg-white text-black font-sans flex justify-center items-center">
                Today price
            </div>
            <div data-aos-delay="400" data-aos="fade-up" data-aos-duration="1000" className="flex justify-between gap-x-4 w-4/6 p-4 h-36 rounded-3xl bg-black/30 backdrop-blur-xl">
                ‍‍<div className="flex flex-col gap-y-2 w-4/6">
                    <span className="flex items-center h-1/2 font-sans text-zinc-400">
                        7d Low / 7d High
                    </span>
                    <span className="font-sans font-bold text-lg s text-white">
                        $19.95 / $25.43
                    </span>
                </div>
                ‍‍<div className="flex flex-col gap-y-2 w-2/6 h-full">
                    <span className="flex items-center h-1/2 font-sans text-lg text-red-500 font-normal">
                        +2.04%
                    </span>
                    <svg width="91" viewBox="0 0 124 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2.21947L4.38889 1.49197C7.77778 0.764464 14.5556 -0.69054 21.3333 10.4411C28.1111 21.5728 34.8889 45.2912 41.6667 46.9095C48.4444 48.5278 55.2222 28.0461 62 17.1325C68.7778 6.21886 75.5556 4.87343 82.3333 11.3387C89.1111 17.8039 95.8889 32.0799 102.667 35.9721C109.444 39.8644 116.222 33.373 119.611 30.1273L123 26.8816" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </section>
       </>
    )
}

export default Price