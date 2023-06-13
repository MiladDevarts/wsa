
import Link from "next/link"

function BlogCard({image, title, summery, author, authorAvatar, date, url}) {
    return (
        <Link href={url} className={"hover:cursor-pointer hover:bg-[#0C0C0C] transition-all duration-200 flex flex-col grow-0 gap-y-4 w-full px-3 lg:px-8 border-b pb-6 border-white/10 text-white font-sans "  + (image ? 'long-item' : 'short-item')}>
            {
                image && <img src={image} className="my-4 rounded-3xl" alt="" />
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
        </Link>
    )
}

export default BlogCard