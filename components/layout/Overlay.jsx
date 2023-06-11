"use client"

import { useContext } from "react"
import { MenuContext } from "@/context/MenuProvider"

import Button from "../Button"
import Link from "next/link"

function Overlay() {

    let menuVisibilty = useContext(MenuContext)


    return (
        <>
            {
                <section className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg z-50">
                    <nav className={`container flex justify-between my-10 z-50`}>
                        <Link href="/">
                            <img src="../images/logos/white-logo.svg" alt="" />
                        </Link>
                        <div className="flex items-center gap-x-3 hover:cursor-pointer" onClick={() => { menuVisibilty.setMenu(false) }}>
                            <span className="hidden lg:flex">
                                Close
                            </span>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 0H0V2H18V0ZM18 7H6V9H18V7ZM18 14H0V16H18V14Z" fill="white" />
                            </svg>
                        </div>
                    </nav >
                    <div className="lg:container flex flex-col items-center lg:flex-row lg:my-32">
                        <ul className="text-white font-mono w-auto lg:w-1/2 container flex flex-col lg:order-2 gap-y-4 text-3xl font-bold mb-12 lg:mb-0">
                            <li className="cursor-pointer">Home </li>
                            <li className="cursor-pointer">About us</li>
                            <li className="cursor-pointer">Services</li>
                            <li className="cursor-pointer">Contact us</li>
                            <li className="cursor-pointer">Projects</li>
                            <li className="text-xl font-medium cursor-pointer text-[#7E7E7E]">Blog</li>
                            <li className="text-xl font-medium cursor-pointer text-[#7E7E7E]">FAQ a & Terms</li>
                        </ul>
                        <div className="container w-full lg:w-1/2 flex flex-wrap gap-y-4 lg:flex-col lg:gap-y-10 justify-between">
                            <div>
                                <h4 className="text-zinc-400 lg:text-2xl">E-mail:</h4>
                                <span className="font-sans lg:text-xl">info@whitesnail.com</span>
                            </div>
                            <div>
                                <h4 className="text-zinc-400 lg:text-2xl">Office:</h4>
                                <span className="font-sans lg:text-xl">Stockholm, Sweden</span>
                            </div>
                            <div className="flex gap-x-4 items-center w-full">
                                <a href="">
                                    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.28004 5.09 4.11004 3.38 2.00004 0.79C1.63004 1.42 1.42004 2.16 1.42004 2.94C1.42004 4.43 2.17004 5.75 3.33004 6.5C2.62004 6.5 1.96004 6.3 1.38004 6V6.03C1.38004 8.11 2.86004 9.85 4.82004 10.24C4.19077 10.4122 3.53013 10.4362 2.89004 10.31C3.16165 11.1625 3.69358 11.9084 4.41106 12.4429C5.12854 12.9775 5.99549 13.2737 6.89004 13.29C5.37367 14.4904 3.49404 15.1393 1.56004 15.13C1.22004 15.13 0.880039 15.11 0.540039 15.07C2.44004 16.29 4.70004 17 7.12004 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.9803 11.4104C21.6403 5.61044 16.3703 1.14045 10.3003 2.14045C6.12029 2.83045 2.77029 6.22043 2.12029 10.4004C1.74029 12.8204 2.24031 15.1104 3.33031 17.0004L2.4403 20.3104C2.2403 21.0604 2.93028 21.7404 3.67028 21.5304L6.93029 20.6304C8.41029 21.5004 10.1403 22.0004 11.9903 22.0004C17.6303 22.0004 22.3103 17.0304 21.9803 11.4104ZM16.8803 15.7204C16.7903 15.9004 16.6803 16.0704 16.5403 16.2304C16.2903 16.5004 16.0203 16.7004 15.7203 16.8204C15.4203 16.9504 15.0903 17.0104 14.7403 17.0104C14.2303 17.0104 13.6803 16.8905 13.1103 16.6405C12.5303 16.3905 11.9603 16.0604 11.3903 15.6504C10.8103 15.2304 10.2703 14.7604 9.7503 14.2504C9.2303 13.7304 8.77027 13.1804 8.35027 12.6104C7.94027 12.0404 7.61029 11.4704 7.37029 10.9004C7.13029 10.3304 7.01031 9.78045 7.01031 9.26045C7.01031 8.92044 7.0703 8.59044 7.1903 8.29044C7.3103 7.98044 7.50032 7.70045 7.77032 7.45045C8.09032 7.13045 8.4403 6.98045 8.8103 6.98045C8.95029 6.98045 9.09027 7.01044 9.22027 7.07044C9.35027 7.13044 9.47029 7.22044 9.5603 7.35044L10.7203 8.99043C10.8103 9.12043 10.8803 9.23043 10.9203 9.34043C10.9703 9.45043 10.9903 9.55043 10.9903 9.65043C10.9903 9.77043 10.9503 9.89045 10.8803 10.0104C10.8103 10.1304 10.7203 10.2504 10.6003 10.3704L10.2203 10.7704C10.1603 10.8304 10.1403 10.8904 10.1403 10.9704C10.1403 11.0104 10.1503 11.0504 10.1603 11.0904C10.1803 11.1304 10.1903 11.1604 10.2003 11.1904C10.2903 11.3604 10.4503 11.5704 10.6703 11.8304C10.9003 12.0904 11.1403 12.3604 11.4003 12.6204C11.6703 12.8904 11.9303 13.1304 12.2003 13.3604C12.4603 13.5804 12.6803 13.7304 12.8503 13.8204C12.8803 13.8304 12.9103 13.8504 12.9403 13.8604C12.9803 13.8804 13.0203 13.8804 13.0703 13.8804C13.1603 13.8804 13.2203 13.8504 13.2803 13.7904L13.6603 13.4104C13.7903 13.2804 13.9103 13.1904 14.0203 13.1304C14.1403 13.0604 14.2503 13.0204 14.3803 13.0204C14.4803 13.0204 14.5803 13.0404 14.6903 13.0904C14.8003 13.1404 14.9203 13.2004 15.0403 13.2904L16.7003 14.4704C16.8303 14.5604 16.9203 14.6704 16.9803 14.7904C17.0303 14.9204 17.0603 15.0404 17.0603 15.1804C17.0003 15.3504 16.9603 15.5404 16.8803 15.7204Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex flex-col gap-y-4 w-full">
                                <span className="font-sans">
                                    Any question left ?  we are ready to help
                                </span>
                                <Button content={"About us"} outline={true} link={"/about"} />
                            </div>
                        </div>
                    </div>
                </section>}
        </>
    )
}

export default Overlay