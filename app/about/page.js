import StampTwo from "@/components/StampTwo"

function page() {
    return (
        <>
            <section className='py-10 lg:py-32 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url('/images/about/about-bg.png')`}}>
                <div className="container">
                    <div className="flex justify-between items-center">
                        <h1 className='mb-24 text-4xl lg:text-8xl font-semibold font-white'>
                            About
                        </h1>
                        <StampTwo />
                    </div>
                    <div className="flex flex-col gap-y-10">
                        <h4>
                            Welcome to White Snail America company
                        </h4>
                        <p className="font-sans text-white max-w-lg">
                            We are an idea created group that manage several ideas with the help of various experts. We always support ideas that care about the nature and biological balance of this world.
                        </p>
                        <p className="font-sans text-zinc-300 max-w-4xl">
                            Contribute to new ideas and production, helping small and personal businesses and rebuilding them if needed and supporting to increase their sales, gives us a pleasant feeling. Our colleagues and specialists pursue common goals to increase the knowledge and health of people, and environment.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page