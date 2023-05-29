
import Link from "next/link"
import Overlay from "./Overlay"

function NavBar() {


    return (
        <>
            <nav className="container flex justify-between my-10 z-50">
                <Link href="/">
                    <img src="./images/logos/white-logo.svg" alt="" />
                </Link>
                <div className="flex items-center gap-x-3 hover:cursor-pointer">
                    <span className="hidden lg:flex">
                        Menu
                    </span>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0H0V2H18V0ZM18 7H6V9H18V7ZM18 14H0V16H18V14Z" fill="white" />
                    </svg>
                </div>
            </nav>
        </>

    )
}

export default NavBar