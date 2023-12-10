"use client"

import { useContext, useEffect } from "react"
import { MenuContext } from "@/context/MenuProvider"

import Button from "../Button"
import Link from "next/link"

import Aos from "aos";
import "aos/dist/aos.css";

function Overlay() {

    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    useEffect(() => {
        Aos.refresh()
    }, [])

    let menuVisibilty = useContext(MenuContext)

    return (
        <>
            {
                <section data-aos="slide-left" className=" fixed p-6 lg:p-0 top-0 left-0 w-full h-screen bg-black/100 backdrop-blur-lg z-50 transition-all overflow-hidden">
                    <nav className={`container flex justify-between my-5 lg:my-10 z-50`}>
                        <Link onClick={() => { menuVisibilty.setMenu(false) }} href="/">
                            <img src={"/images/logos/circle-logo.svg"} alt="" />
                        </Link>
                        <div className="flex items-center gap-x-3 hover:cursor-pointer" onClick={() => { menuVisibilty.setMenu(false) }}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2L9 9L2 2" stroke="white" stroke-width="3.16667" stroke-linecap="round" />
                                <path d="M16 16L9 9L2 16" stroke="white" stroke-width="3.16667" stroke-linecap="round" />
                            </svg>
                        </div>
                    </nav >
                    <div className="container flex flex-col items-center lg:flex-row mt-8 lg:mt-16 lg:mb-32">
                        <ul className="flex items-end justify-end text-white font-mono w-auto lg:w-1/2 lg:order-2 text-3xl lg:text-5xl font-bold mb-10 mt-10 lg:mt-0 pr-0 lg:pr-20">
                            <div className="inline-flex flex-col lg:order-2 gap-y-6">
                                <li className="cursor-pointer overlay-item">
                                    <svg className="hidden" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.4427 26.6616C20.1736 26.6616 19.9044 26.5624 19.6919 26.3499C19.2811 25.9391 19.2811 25.2591 19.6919 24.8483L27.5402 16.9999L19.6919 9.15159C19.2811 8.74076 19.2811 8.06076 19.6919 7.64992C20.1027 7.23909 20.7827 7.23909 21.1936 7.64992L29.7927 16.2491C30.2036 16.6599 30.2036 17.3399 29.7927 17.7508L21.1936 26.3499C20.9811 26.5624 20.7119 26.6616 20.4427 26.6616Z" fill="white" />
                                        <path d="M28.8005 18.0625H4.95801C4.37717 18.0625 3.89551 17.5808 3.89551 17C3.89551 16.4192 4.37717 15.9375 4.95801 15.9375H28.8005C29.3813 15.9375 29.863 16.4192 29.863 17C29.863 17.5808 29.3813 18.0625 28.8005 18.0625Z" fill="white" />
                                    </svg>
                                    <Link className="flex gap-x-3" data-aos-delay="300" data-aos="fade-left" data-aos-duration="1000" href="/" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        Home
                                    </Link>
                                </li>
                                <li className="cursor-pointer overlay-item">
                                    <svg className="hidden" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.4427 26.6616C20.1736 26.6616 19.9044 26.5624 19.6919 26.3499C19.2811 25.9391 19.2811 25.2591 19.6919 24.8483L27.5402 16.9999L19.6919 9.15159C19.2811 8.74076 19.2811 8.06076 19.6919 7.64992C20.1027 7.23909 20.7827 7.23909 21.1936 7.64992L29.7927 16.2491C30.2036 16.6599 30.2036 17.3399 29.7927 17.7508L21.1936 26.3499C20.9811 26.5624 20.7119 26.6616 20.4427 26.6616Z" fill="white" />
                                        <path d="M28.8005 18.0625H4.95801C4.37717 18.0625 3.89551 17.5808 3.89551 17C3.89551 16.4192 4.37717 15.9375 4.95801 15.9375H28.8005C29.3813 15.9375 29.863 16.4192 29.863 17C29.863 17.5808 29.3813 18.0625 28.8005 18.0625Z" fill="white" />
                                    </svg>
                                    <Link data-aos-delay="400" data-aos="fade-left" data-aos-duration="1000" href="/about" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        About us
                                    </Link>
                                </li>
                                <li className="cursor-pointer overlay-item">
                                    <svg className="hidden" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.4427 26.6616C20.1736 26.6616 19.9044 26.5624 19.6919 26.3499C19.2811 25.9391 19.2811 25.2591 19.6919 24.8483L27.5402 16.9999L19.6919 9.15159C19.2811 8.74076 19.2811 8.06076 19.6919 7.64992C20.1027 7.23909 20.7827 7.23909 21.1936 7.64992L29.7927 16.2491C30.2036 16.6599 30.2036 17.3399 29.7927 17.7508L21.1936 26.3499C20.9811 26.5624 20.7119 26.6616 20.4427 26.6616Z" fill="white" />
                                        <path d="M28.8005 18.0625H4.95801C4.37717 18.0625 3.89551 17.5808 3.89551 17C3.89551 16.4192 4.37717 15.9375 4.95801 15.9375H28.8005C29.3813 15.9375 29.863 16.4192 29.863 17C29.863 17.5808 29.3813 18.0625 28.8005 18.0625Z" fill="white" />
                                    </svg>
                                    <Link data-aos-delay="500" data-aos="fade-left" data-aos-duration="1000" href="/services" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        Services
                                    </Link>
                                </li>
                                <li className="cursor-pointer overlay-item">
                                    <svg className="hidden" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.4427 26.6616C20.1736 26.6616 19.9044 26.5624 19.6919 26.3499C19.2811 25.9391 19.2811 25.2591 19.6919 24.8483L27.5402 16.9999L19.6919 9.15159C19.2811 8.74076 19.2811 8.06076 19.6919 7.64992C20.1027 7.23909 20.7827 7.23909 21.1936 7.64992L29.7927 16.2491C30.2036 16.6599 30.2036 17.3399 29.7927 17.7508L21.1936 26.3499C20.9811 26.5624 20.7119 26.6616 20.4427 26.6616Z" fill="white" />
                                        <path d="M28.8005 18.0625H4.95801C4.37717 18.0625 3.89551 17.5808 3.89551 17C3.89551 16.4192 4.37717 15.9375 4.95801 15.9375H28.8005C29.3813 15.9375 29.863 16.4192 29.863 17C29.863 17.5808 29.3813 18.0625 28.8005 18.0625Z" fill="white" />
                                    </svg>
                                    <Link data-aos-delay="600" data-aos="fade-left" data-aos-duration="1000" href="/contact" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        Contact us
                                    </Link>
                                </li>
                                <li className="cursor-pointer overlay-item">
                                <svg className="hidden" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.4427 26.6616C20.1736 26.6616 19.9044 26.5624 19.6919 26.3499C19.2811 25.9391 19.2811 25.2591 19.6919 24.8483L27.5402 16.9999L19.6919 9.15159C19.2811 8.74076 19.2811 8.06076 19.6919 7.64992C20.1027 7.23909 20.7827 7.23909 21.1936 7.64992L29.7927 16.2491C30.2036 16.6599 30.2036 17.3399 29.7927 17.7508L21.1936 26.3499C20.9811 26.5624 20.7119 26.6616 20.4427 26.6616Z" fill="white" />
                                        <path d="M28.8005 18.0625H4.95801C4.37717 18.0625 3.89551 17.5808 3.89551 17C3.89551 16.4192 4.37717 15.9375 4.95801 15.9375H28.8005C29.3813 15.9375 29.863 16.4192 29.863 17C29.863 17.5808 29.3813 18.0625 28.8005 18.0625Z" fill="white" />
                                    </svg>
                                    <Link data-aos-delay="700" data-aos="fade-left" data-aos-duration="1000" href="/projects" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="text-xl font-medium cursor-pointer text-[#7E7E7E]">
                                    <Link data-aos-delay="800" data-aos="fade-up" data-aos-duration="1000" href="/team-gate" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        Team Log in
                                    </Link>
                                </li>
                                <li className="text-xl font-medium cursor-pointer text-[#7E7E7E]">
                                    <Link data-aos-delay="800" data-aos="fade-up" data-aos-duration="1000" href="/blog" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="flex text-xl font-medium cursor-pointer text-[#7E7E7E]">
                                    <Link className="mr-1" data-aos-delay="90" data-aos="fade-up" data-aos-duration="1000" href="/faq" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        FAQ 
                                    </Link>
                                    &
                                    <Link className="ml-1" data-aos-delay="90" data-aos="fade-up" data-aos-duration="1000" href="/privacy-policy" onClick={() => { menuVisibilty.setMenu(false) }}>
                                        Privacy Policy 
                                    </Link>
                                </li>
                            </div>
                        </ul>
                        <div className="w-full lg:w-1/2 flex flex-wrap gap-y-4 lg:flex-col lg:gap-y-10 justify-between mt-0 lg:mt-2">
                            <div>
                                <h4 className="text-[#7E7E7E] lg:text-2xl font-mono font-medium mb-1 lg:mb-4 ">E-mail:</h4>
                                <span className="text-white font-sans lg:text-xl">info@wsa.team</span>
                            </div>
                            <div>
                                <h4 className="text-[#7E7E7E] lg:text-2xl font-mono font-medium mb-1 lg:mb-4">Office:</h4>
                                <span className="text-white font-sans lg:text-xl">Stockholm, New York</span>
                            </div>
                            <div className="flex gap-x-4 items-center w-full lg:my-16 my-2">
                                <a href="">
                                    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28004 5.09 4.11004 3.38 2.00004 0.79C1.63004 1.42 1.42004 2.16 1.42004 2.94C1.42004 4.43 2.17004 5.75 3.33004 6.5C2.62004 6.5 1.96004 6.3 1.38004 6V6.03C1.38004 8.11 2.86004 9.85 4.82004 10.24C4.19077 10.4122 3.53013 10.4362 2.89004 10.31C3.16165 11.1625 3.69358 11.9084 4.41106 12.4429C5.12854 12.9775 5.99549 13.2737 6.89004 13.29C5.37367 14.4904 3.49404 15.1393 1.56004 15.13C1.22004 15.13 0.880039 15.11 0.540039 15.07C2.44004 16.29 4.70004 17 7.12004 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                            <div className="hidden lg:flex flex-col gap-y-2 w-full lg:mt-4">
                                <span className="text-sm lg:text-xl mb-2 text-white">
                                    Any question left ?  we are ready to help
                                </span>
                                <Button content={"Contact us"} outline={true} link={"/contact"} />
                            </div>
                        </div>
                    </div>
                </section>}
        </>
    )
}

export default Overlay