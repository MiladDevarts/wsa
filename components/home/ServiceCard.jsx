
function ServiceCard() {
    return (
        <div className="font-sans text-white w-full p-8 flex flex-col gap-y-6 rounded-2xl border 
    border-white/20">
            <h4 className="text-xl">
                Build platforms
            </h4>
            <img src="./images/service/abstraction.png" className="w-28 self-center" alt="" />
            <p className="text-zinc-400">
                We assist businesses, individuals, and institutions develop scalable web solutions, designs and interoperable content while assessing and managing privacy and security risks.
            </p>
        </div>
    )
}

export default ServiceCard