import React from 'react'

function RelatedCard({ image, date, author, authorAvatar, title, summery }) {
    return (
        <div className='w-full lg:w-1/3 flex flex-col grow-0 gap-y-4 px-3 '>
            {
                image && <img src={image} className="my-4" alt="" />
            }
            <span className="font-light">
                {date}
            </span>
            <div className="flex items-center gap-x-2">
                <img src={authorAvatar} className="w-6" alt="" />
                <span className="text-sm font-semibold">
                    {author}
                </span>
            </div>
            <h4 className="text-xl font-bold font-sans my-2">
                {title}
            </h4>
            <p className="text-[#8D8D8D] my-4">
                {summery}
            </p>
            <a href="#" className="flex items-center gap-x-2">
                Read more
                <svg width="15" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.44303 8L2.79688 7.35385L7.22764 2.92308H3.25841V2H8.79688V7.53846H7.8738V3.56923L3.44303 8Z" fill="white" />
                </svg>
            </a>
        </div>
    )
}

export default RelatedCard