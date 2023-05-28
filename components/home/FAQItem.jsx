"use client"

import React, { useState } from 'react';

function FAQItem({ title, content }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className='flex flex-col w-full m-auto p-4 lg:p-8 border-b border-white/10 text-white hover:cursor-pointer leading-8 duration-300'>
            <div className='flex justify-between' onClick={() => setIsActive(!isActive)}>
                <h4 className='font-sans text-lg lg:text-2xl sm text-white'>
                    - {title}
                </h4>
                <div>
                    {
                        isActive ? <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 6L14 14L6 6" stroke="white" stroke-width="3.16667" stroke-linecap="round"/>
                        <path d="M22 22L14 14L6 22" stroke="white" stroke-width="3.16667" stroke-linecap="round"/>
                        </svg>
                            : <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1429 26V17.8571H7V15.1429H15.1429V7H17.8571V15.1429H26V17.8571H17.8571V26H15.1429Z" fill="white"/>
                            </svg>
                            
                    }
                </div>
            </div>
            {
             <div  className={`px-6 mt-5 overflow-hidden rounded-3xl transition-all duration-300 ease-in ${isActive ? "max-h-80 bg-[#0C0C0C]" : "max-h-0"}`}>
                <p className='text-zinc-200 font-sans p-6 lg:p-10'>
                    {content}
                </p>
                </div>
            }
        </div>
    )
}

export default FAQItem