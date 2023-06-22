"use client"

function TabContent({id, title, content, openTab,image}) {

    return (
        <div data-aos="fade-left"  className={openTab === id ? `flex flex-col gap-y-2 lg:gap-x-4  lg:flex-row w-full  justify-between` : `hidden` }>
            <div className="flex flex-col p-4 lg:p-16 rounded-3xl gap-y-4 w-full lg:w-2/3 bg-[#0C0C0C] transition-all duration-200">
                <h3 className="text-2xl mt-2 mb-4">
                    {title}
                </h3>
                <p className="mb-4 text-sm lg:text-xl font-light text-[#C8C8C8] leading-8 lg:leading-10">
                    {content}
                </p>
            </div>
            <div className="flex justify-center items-center p-16 rounded-3xl w-full lg:w-1/3 border-2 border-[#2D2D2D] transition-all duration-200">
                <img src={image} className="max-w-[100px] lg:max-w-[220px]" alt="" />
            </div>
        </div>
    )
}

export default TabContent