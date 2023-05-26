
function Footer() {
  return (
    <footer className="mt-20 py-10 bg-contain bg-bottom bg-no-repeat" style={{ backgroundImage: `url('/images/footer/footer-bg.png')` }}>

      <section className="container flex flex-col items-center gap-y-6 my-20">
        <h2 className="flex flex-col gap-y-3 items-center text-2xl lg:text-5xl text-white font-extrabold lg:font-semibold">
          <div className="flex gap-x-2 items-center">
            Have any
            <span className="inline-block bg-white lg:w-44 w-20 h-14 rounded-full px-4 bg-cover bg-center" style={{ backgroundImage: `url('/images/footer/footer-badge.png')` }}>

            </span>
          </div>
          <div>
            Ideas to work on?
          </div>
          <div className="flex gap-x-2">
            <span className="font-extrabold text-shadow">Tell us</span>
            about it
          </div>
        </h2>
        <div>
          <img src="/images/logos/vertical-white-logo.png" className="w-32 animate-pulse" alt="" />
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-x-5 my-4">
          <div className="flex gap-x-3 items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z" stroke="#8C8C8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5" stroke="#8C8C8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="flex flex-col gap-y-1 font-sans">
              <span className="text-xs text-zinc-400 font-bold">
              Feedback Mail
              </span>
              <span>
              feedback@whitesnail.com
              </span>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z" stroke="#8C8C8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5" stroke="#8C8C8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="flex flex-col gap-y-1  font-sans">
              <span className="text-xs text-zinc-400 font-bold">
              Education Mail
              </span>
              <span>
              education@whitesnail.com
              </span>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z" stroke="#8C8C8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5" stroke="#8C8C8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="flex flex-col gap-y-1 font-sans">
              <span className="text-xs text-zinc-400 font-bold">
              Ads Mail
              </span>
              <span>
              ads@whitesnail.com
              </span>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z" stroke="#8C8C8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5" stroke="#8C8C8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="flex flex-col gap-y-1 font-sans">
              <span className="text-xs text-zinc-400 font-bold">
              Info Mail
              </span>
              <span>
              info@whitesnail.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-10 font-sans text-zinc-400">
          <ul className="grid grid-cols-2 gap-y-3 lg:flex lg:gap-x-8 mb-4 lg:mb-0">
            <li className="w-full lg:w-auto">Services</li>
            <li className="w-full lg:w-auto">Projects</li>
            <li className="w-full lg:w-auto">About</li>
            <li className="w-full lg:w-auto">Contact us</li>
            <li className="w-full lg:w-auto">FAQ</li>
            <li className="w-full lg:w-auto">Terms</li>
            <li className="w-full lg:w-auto">Privacy policy</li>
          </ul>
          <span className="w-full lg:w-auto text-right">© 2020, All Rights Reserved</span>
        </div>
      </section>

    </footer>
  )
}

export default Footer