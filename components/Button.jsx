import React from 'react'

function Button({ content, classes, outline, link }) {
  if (outline) {
    return <a href={link} className={`flex items-center justify-center w-44 h-16 rounded-full bg-transparent text-white border border-white font-sans ${classes}`}>{content}</a>
  } else {
    return <a href={link} className={`flex items-center justify-center w-36 h-16 rounded-full bg-white text-black font-sans ${classes}`}>{content}</a>
  }
}

export default Button