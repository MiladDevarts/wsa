"use client"

import { useContext, useEffect } from "react"

import Aos from "aos";
import "aos/dist/aos.css";

import Link from "next/link"
import { MenuContext } from "@/context/MenuProvider"

function NavBar({ classes }) {

    let menuVisibilty = useContext(MenuContext)

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
            <nav data-aos-delay="100" data-aos="fade-down" data-aos-duration="1000" className={`container flex justify-between my-10 z-50 ${classes}`}>
                <Link onClick={() => { menuVisibilty.setMenu(false) }} href="/">
                    <img src="../images/logos/white-logo.svg" alt="" />
                </Link>
                <div className="flex items-center gap-x-3 hover:cursor-pointer" onClick={() => { menuVisibilty.setMenu(true) }}>
                    <span className="hidden lg:flex">
                        Menu
                    </span>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0H0V2H18V0ZM18 7H6V9H18V7ZM18 14H0V16H18V14Z" fill="white" />
                    </svg>
                </div>
            </nav >

        </>

    )
}

export default NavBar