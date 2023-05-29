
function Contact() {
    return (
        <section className="flex flex-col items-center py-32 lg:py-48 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/images/header/introduce-bg.png')` }}>
            <div className="container">
                <h2 className="flex flex-col gap-y-3 items-center text-2xl lg:text-5xl text-white font-extrabold lg:font-semibold">
                    <div>
                        LETS DISCUSS
                    </div>
                    <div className="flex gap-x-2">
                        HOW we can be
                    </div>
                    <div className="flex gap-x-4">
                        useful to you
                    </div>
                </h2>
            </div>
            <section className='container flex justify-center py-8'>
                <div className='w-full lg:w-1/2 flex h-20 border border-white/20 p-2 rounded-2xl'>
                    <input type="text" className='w-4/6 lg:w-5/6 h-full bg-transparent text-white pl-2 focus:outline-none' placeholder='Your E-mail' />
                    <input type="submit" className='flex items-center justify-center w-2/6 lg:2-1/6 h-full rounded-3xl bg-white text-black font-sans' />
                </div>
            </section>
        </section>
    )
}

export default Contact