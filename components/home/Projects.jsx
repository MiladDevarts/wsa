
import Link from "next/link"
import TitleSection from "../layout/TitleSection"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {

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

            <TitleSection title="Projects" link="/projects" />

            <section className="container mt-4 mb-0 lg:mb-6 flex lg:hidden flex-col gap-y-10 text-white">

                <div className="text-white w-full h-[550px] flex flex-col justify-center  bg-center bg-no-repeat  bg-contain p-16 gap-y-10" style={{ backgroundImage: `url('/images/projects/project-card-bg.png')` }}>
                    <span className="font-mono font-bold text-2xl">01</span>
                    <p className="text-2xl font-bold">
                        Providing a Multipurpose Educational Platform
                    </p>
                    <p className="leading-8 text-xl font-medium">
                        We believe that education is the foundation for a better future...
                    </p>
                </div>

                <div className="w-full h-[550px] flex flex-col justify-center bg-center bg-no-repeat  bg-contain px-16 py-6 gap-y-6" style={{ backgroundImage: `url('/images/projects/project-card-bg-2.png')` }}>
                    <span className="font-mono font-bold text-2xl">02</span>
                    <p className="text-2xl font-bold">
                        Providing a Multipurpose learning platform
                    </p>
                    <p className="leading-8 text-lg">
                        At WSA, we contribute to new ideas and production - helping small businesses and professionals...
                    </p>
                </div>

                <div className="w-full h-[550px] flex flex-col justify-center bg-center bg-no-repeat  bg-contain px-16 py-14 gap-y-6" style={{ backgroundImage: `url('/images/projects/project-card-bg.png')` }}>
                    <span className="font-mono font-bold text-2xl">03</span>
                    <p className="text-2xl font-bold">
                        Providing a Marketplace Platform
                    </p>
                    <p className="leading-8 text-lg">
                        We understand that starting an online business can be daunting...
                    </p>
                </div>

            </section>

            <section className="container mt-4 mb-20 lg:flex hidden flex-col gap-y-10 text-white">
                <Link data-aos-delay="50" data-aos="zoom-in-down" href="/projects/1" className="w-full h-96 flex gap-x-10 bg-center bg-no-repeat  bg-contain p-16 gap-y-10" style={{ backgroundImage: `url('/images/projects/project-card-bg-lg.png')` }}>
                    <span className="inline-block text-center w-1/6 my-10 font-mono font-bold text-2xl">01</span>
                    <div className="flex flex-col w-5/6 gap-y-10 my-10">
                        <p className="text-2xl font-bold">
                            - Providing a Multipurpose Educational Platform
                        </p>
                        <p className="leading-8 text-lg">
                            We believe that education is the foundation for a better future. This platform is designed to provide high-quality educational resources to learners of all ages and backgrounds
                        </p>
                    </div>
                </Link>

                <Link data-aos-delay="60" data-aos="zoom-in-down" href="/projects" className="w-full h-56 flex gap-x-10 p-16 px-16 pt-8 pb-6 gap-y-6 border-b border-[#2D2D2D] justify-center items-center">
                    <span className="inline-block w-20 text-center my-10 font-mono font-bold text-2xl">02</span>
                    <div className="inline-flex flex-col w-[500px] gap-y-10 my-10">
                        <p className="text-2xl font-bold">
                            - Providing a Multipurpose learning platform
                        </p>
                    </div>
                </Link>

                <Link data-aos-delay="70" data-aos="zoom-in-down" href="/projects" className="w-full h-56 flex gap-x-10 p-16 px-16 pt-8 pb-6 gap-y-6 border-b border-[#2D2D2D] items-center justify-center">
                    <span className="inline-block w-20 text-center my-10 font-mono font-bold text-2xl">03</span>
                    <div className="flex flex-col w-[500px] gap-y-10 my-10">
                        <p className="text-2xl font-bold">
                            - Providing a Marketplace Platform
                        </p>
                    </div>
                </Link>

            </section>

        </>
    )
}

export default Projects