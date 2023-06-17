"use client"

import Link from "next/link"

import { useContext } from "react"
import { MenuContext } from "@/context/MenuProvider"

function Button({ content, classes, outline, link }) {

  let menuVisibilty = useContext(MenuContext)

  if (outline) {
    return <Link href={link} className={`flex items-center justify-center w-44 h-16 rounded-full bg-transparent text-white border border-white font-sans ${classes}`}  onClick={() => { menuVisibilty.setMenu(false) }}>{content}</Link>
  } else {
    return <Link href={link} className={`flex items-center justify-center w-36 h-16 rounded-full bg-white text-black font-sans ${classes}`}>{content}</Link>
  }

}

export default Button