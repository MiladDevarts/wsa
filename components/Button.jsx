
import Link from "next/link"

function Button({ content, classes, outline, link }) {
  if (outline) {
    return <Link href={link} className={`flex items-center justify-center w-44 h-16 rounded-full bg-transparent text-white border border-white font-sans ${classes}`}>{content}</Link>
  } else {
    return <Link href={link} className={`flex items-center justify-center w-36 h-16 rounded-full bg-white text-black font-sans ${classes}`}>{content}</Link>
  }
}

export default Button