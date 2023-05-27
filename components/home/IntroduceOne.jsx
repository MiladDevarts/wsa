
function IntroduceOne() {
    return (
        <section className="py-32 lg:py-48 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/images/header/introduce-bg.png')` }}>
            <div className="container">
                <h2 className="flex flex-col gap-y-3 items-center text-2xl lg:text-5xl text-white font-extrabold lg:font-semibold">
                    <div>
                        Like the snails we
                    </div>
                    <div className="flex gap-x-2">
                        raise and
                        <span className="font-extrabold text-shadow">nature</span>
                    </div>
                    <div className="flex gap-x-4">
                        with care
                        <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60962 51.1017L0.119141 45.6112L37.7682 7.9622H4.04091V0.118652H51.1022V47.1799H43.2586V13.4527L5.60962 51.1017Z" fill="white" />
                        </svg>
                    </div>
                </h2>
            </div>
        </section>
    )
}

export default IntroduceOne