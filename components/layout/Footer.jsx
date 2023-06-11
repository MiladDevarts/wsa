import Link from "next/link"

function Footer() {
  return (
    <footer className="mt-20 py-10 bg-contain bg-bottom bg-no-repeat" style={{ backgroundImage: `url('/images/footer/footer-bg.png')` }}>
      <section className="container flex flex-col lg:flex-row lg:justify-between items-center gap-y-6 my-36">
        <h2 className={`font-mono flex flex-col gap-y-3 lg:gap-y-6 items-start text-xl lg:text-4xl text-white font-bold lg:font-bold`}>
          <div className="flex gap-x-2 items-center">
            Large project
            <span className="inline-block bg-white lg:w-44 w-20 h-14 rounded-full px-4 bg-cover bg-center ml-4" style={{ backgroundImage: `url('/images/footer/footer-badge.png')` }}>
            </span>
          </div>
          <div>
            start with small steps,
          </div>
          <div>
            are you ready
          </div>
          <div className="flex gap-x-2">
            for the first step?
          </div>
        </h2>
        <div>
          <img src="/images/logos/vertical-white-logo.png" className="w-32 opacity-50 animate-pulse" alt="" />
        </div>
      </section>
      <section className={`container`}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-x-5 my-4">
          <div className="flex gap-x-3 items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col gap-y-1">
              <span className="text-xs text-zinc-400 font-bold">
                Feedback Mail
              </span>
              <span className="text-white">
                feedback@whitesnail.com
              </span>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col gap-y-1">
              <span className="text-xs text-zinc-400 font-bold">
                Education Mail
              </span>
              <span className="text-white">
                education@whitesnail.com
              </span>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col gap-y-1">
              <span className="text-xs text-zinc-400 font-bold">
                Ads Mail
              </span>
              <span className="text-white">
                ads@whitesnail.com
              </span>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5" stroke="#8C8C8C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col gap-y-1">
              <span className="text-xs text-zinc-400 font-bold">
                Info Mail
              </span>
              <span className="text-white">
                info@whitesnail.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-10 text-zinc-400">
          <ul className="text-white grid grid-cols-2 gap-y-3 lg:flex lg:gap-x-8 mb-4 lg:mb-0">
            <li className="w-full lg:w-auto">
              <Link href="/services">
                Services
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link href="/projects">
                Projects
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link href="/about">
                About
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link href="/contact">
                Contact us
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link href="/faq">
                FAQ
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link href="/terms">
                Terms
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              Privacy policy
            </li>
          </ul>
          <span className="w-full lg:w-auto text-right">© 2020, All Rights Reserved</span>
        </div>
      </section>
    </footer>
  )
}

export default Footer