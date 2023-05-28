
function BrandSolgan() {
    return (
        <section className="flex flex-col items-center py-60 lg:py-48 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url('/images/brand/solgan-bg.png')` }}>
            <div className="container">
                <h2 className="flex flex-col gap-y-5 items-center text-2xl lg:text-6xl text-white font-extrabold lg:font-semibold">
                    <div>
                        Snails
                        <span className="inline-block mx-1 font-thin">slow</span>
                        and
                    </div>
                    <div className="flex gap-x-2">
                        <span className="inline-block mx-1 font-thin">steady</span>
                        wins
                    </div>
                    <div className="flex gap-x-4">
                        the race.
                    </div>
                </h2>
            </div>
        </section>
    )
}

export default BrandSolgan