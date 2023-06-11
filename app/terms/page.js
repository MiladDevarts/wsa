"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function page() {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    Aos.refresh()
  }, [])

  return (    
    <>
      <section className='container my-36'>
        <div className="flex flex-col gap-y-6 mb-24">
          <h1 data-aos-delay="400" data-aos="zoom-in-right" data-aos-duration="1000" className='text-4xl lg:text-8xl font-mono font-semibold text-white'>
            Terms
          </h1>
          <p className="text-[#B5B5B5]">
            Last Updated May, 2023
          </p>
        </div>
      </section>
      <div className="my-24">
        <div className="w-full py-4 border-l-4 border-white">
          <h3 className="container text-xl lg:text-2xl text-white font-bold">
            What are Terms and Conditions?
          </h3>
        </div>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
          Terms and conditions outline what users can and cannot do with your website, products, and services. They lay out the rules to protect you in case of misuse and enable you to take action if it becomes necessary.
        </p>
        <p className="container text-white text-lg lg:text-xl">
          It’s also referred to by other names such as terms of service (ToS) and terms of use (ToU). Even though they have different names, in fact – there is no difference. Any of these three terms (sometimes even referred to as user agreement) basically refer to the same document.        </p>
      </div>
      <div className="my-24">
        <div className="w-full py-4 border-l-4 border-white">
          <h3 className="container text-xl lg:text-2xl text-white font-bold">
            Are Terms and Conditions Required by Law?
          </h3>
        </div>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
          No. You aren’t legally required to have a terms and conditions agreement on your website. However, having terms and conditions is a good practice as it sets the “house” rules for everybody and creates a safer environment. This is especially important in some western countries where frivolous lawsuits are somewhat of a norm.
        </p>
        <p className="container text-white text-lg lg:text-xl">
          It’s also referred to by other names such as terms of service (ToS) and terms of use (ToU). Even though they have different names, in fact – there is no difference. Any of these three terms (sometimes even referred to as user agreement) basically refer to the same document.
        </p>
      </div>
      <section className="relative top-0 left-0 w-full py-20 border-b-4 border-[#FFA800] before:contents before:absolute before:z-50 before:w-32 before:h-32 before:top-10 before:bg-white before:left-0 before:from-slate-600 before:to-slate-500/10">
        <div className="container gap-y-4 lg:gap-x-4 justify-center lg:items-center flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/12 flex justify-center">
            <svg width="80" height="80" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.5 34.9478C29.4579 34.9478 28.5938 34.0836 28.5938 33.0415V19.6978C28.5938 18.6557 29.4579 17.7915 30.5 17.7915C31.5421 17.7915 32.4062 18.6557 32.4062 19.6978V33.0415C32.4062 34.0836 31.5421 34.9478 30.5 34.9478Z" fill="white" />
              <path d="M30.4987 43.8436C29.8124 43.8436 29.177 43.5895 28.6941 43.1066C28.4653 42.8524 28.2875 42.5728 28.135 42.2678C28.0079 41.9628 27.957 41.6324 27.957 41.3019C27.957 40.6411 28.2366 39.9802 28.6941 39.4973C29.6345 38.5569 31.3629 38.5569 32.3033 39.4973C32.7608 39.9802 33.0404 40.6411 33.0404 41.3019C33.0404 41.6324 32.9641 41.9628 32.837 42.2678C32.7099 42.5728 32.5321 42.8524 32.3033 43.1066C31.8204 43.5895 31.1849 43.8436 30.4987 43.8436Z" fill="white" />
              <path d="M30.5023 57.823C28.7993 57.823 27.071 57.3909 25.546 56.5013L10.4485 47.7834C7.39847 46.0043 5.49219 42.7255 5.49219 39.1926V21.8077C5.49219 18.2748 7.39847 14.996 10.4485 13.2168L25.546 4.49893C28.596 2.71976 32.3831 2.71976 35.4585 4.49893L50.556 13.2168C53.606 14.996 55.5123 18.2748 55.5123 21.8077V39.1926C55.5123 42.7255 53.606 46.0043 50.556 47.7834L35.4585 56.5013C33.9335 57.3909 32.2052 57.823 30.5023 57.823ZM30.5023 6.98971C29.4602 6.98971 28.3926 7.26931 27.4522 7.80306L12.3547 16.521C10.4739 17.6139 9.30469 19.6218 9.30469 21.8077V39.1926C9.30469 41.353 10.4739 43.3864 12.3547 44.4793L27.4522 53.1972C29.3331 54.2901 31.6714 54.2901 33.5268 53.1972L48.6243 44.4793C50.5052 43.3864 51.6744 41.3784 51.6744 39.1926V21.8077C51.6744 19.6473 50.5052 17.6139 48.6243 16.521L33.5268 7.80306C32.6118 7.26931 31.5443 6.98971 30.5023 6.98971Z" fill="white" />
            </svg>
          </div>
          <p className="w-full lg:w-11/12 text-center lg:text-left text-xl text-white">
            When drafted properly, it allows you to maintain ownership and control over your website, products and services, and can help in maintaining a positive and pleasant relationship with your users as they will be aware of what constitutes acceptable behavior.
          </p>
        </div>
      </section>
      <div className="my-24">
        <div className="w-full py-4 border-l-4 border-white">
          <h3 className="container text-xl lg:text-2xl text-white font-bold">
            Copyright & Intellectual Property
          </h3>
        </div>
        <p className="container text-white text-lg lg:text-xl">
          It also helps having a copyright notice that confirms and warns your users that the content on your website is yours and is not to be reproduced or re-used without your express permission. It re-affirms that you hold trademarks and ownership over certain elements of the website itself and over the products that you sell and should be a no-brainer.
        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mt-8">
          While having an intellectual property clause won’t guarantee that someone won’t copy your work, it can certainly act as a good deterrent.
        </p>
      </div>
      <div className="mt-24 mb-56">
        <div className="w-full py-4 border-l-4 border-white">
          <h3 className="container text-xl lg:text-2xl text-white font-bold">
            DMCA Takedown Process
          </h3>
        </div>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
          While having an intellectual property clause won’t guarantee that someone won’t copy your work, it can certainly act as a good deterrent.
        </p>
        <p className="container text-white text-lg lg:text-xl">
          It also helps having a copyright notice that confirms and warns your users that the content on your website is yours and is not to be reproduced or re-used without your express permission. It re-affirms that you hold trademarks and ownership over certain elements of the website itself and over the products that you sell and should be a no-brainer.
        </p>
      </div>
    </>
  )
}

export default page