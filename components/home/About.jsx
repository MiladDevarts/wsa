
function About() {
  return (
    <section className="w-full py-10 my-6">
      <div className="container flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-2xl font-bold flex gap-x-2">
            <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" width="6" height="24" transform="rotate(24.8486 25 0)" fill="white" />
              <rect x="11" width="6" height="24" transform="rotate(24.8486 11 0)" fill="#5F5F5F" />
            </svg>
            About us
          </h3>
          <p className="text-white font-sans">
            <span className="text-zinc-400 inline-block mr-1">
              Welcome
            </span>
            to White Snail
            <br />
            <span className="flex gap-x-2 items-center">
              America company.
              <svg width="15" height="21" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" width="6" height="24" transform="rotate(24.8486 25 0)" fill="white" />
                <rect x="11" width="6" height="24" transform="rotate(24.8486 11 0)" fill="#5F5F5F" />
              </svg>
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="font-sans">
            We are 
            <span className="text-white">an idea</span>
             created group that manage several ideas with the help of various experts. We always support ideas that care about the nature and biological balance of this world.
          </p>
        </div>
      </div>
      <div>
      </div>
    </section>
  )
}

export default About