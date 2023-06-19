"use client"

import Overlay from "@/components/layout/Overlay"
import { MenuContext } from "@/context/MenuProvider"
import { useContext, useEffect } from "react"

import Aos from "aos";
import "aos/dist/aos.css";

function page() {

  let menuVisibility = useContext(MenuContext)

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
      {
        menuVisibility.menu && <Overlay />
      }
      <section className='container my-36'>
        <div className="flex flex-col gap-y-6 mb-24">
          <h1 data-aos-delay="400" data-aos="zoom-in-right" data-aos-duration="1000" className='text-4xl lg:text-8xl font-mono font-semibold text-white'>
            Contact Us
          </h1>
          <p className="text-lg lg:text-2xl font-medium text-[#B5B5B5] ">
            Thank you for your interest in our website . We are committed to providing our users with the best experience possible, and we welcome your questions, comments, and feedback.
          </p>
        </div>
      </section>
      <div className="mt-24 mb-56">
        <div className="w-full py-4 border-l-4 border-white">
          <h3 className="container text-xl lg:text-2xl text-white font-bold mb-10">
            Our other contact emails
          </h3>
        </div>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
          For general inquiries or feedback, please email us at
          <a className="font-bold text-white cursor-pointer mx-2">info@whitesnail.com </a>
          We will do our best to respond to your message within 24 hours or you can call us to the number
        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
          If you have any specific questions or concerns about advertising on our platform, please contact our advertising team at
          <a className="font-bold text-white cursor-pointer mx-2">ads@whitesnail.com </a>
          and phone number …
        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl mb-8">
          For any educational inquiries, including questions about our courses or content, please contact our education team at
          <a className="font-bold text-white cursor-pointer mx-2">education@whitesnail.com</a>
        </p>
        <p className="container text-[#B5B5B5] text-lg lg:text-xl lg:max-w mb-8">
          We also welcome your feedback on our platform, including any suggestions for improvement. Please feel free to share your thoughts with us by emailing
          <a className="font-bold text-white cursor-pointer mx-2">feedback@whitesnail.com</a>
        </p>
      </div>
      <section className="w-full h-[700px] bg-[center_top_100px] bg-contain bg-no-repeat" style={{ backgroundImage: `url('/images/contact/earth.webp')` }}>
        <div className="container">
          <h2 className="flex flex-col gap-y-1 lg:gap-y-4 items-center mb-8  lg:text-4xl text-white font-mono font-extrabold lg:font-semibold">
            <div>
              Thank you for
              <span className="inline-block mx-1 font-thin">choosing</span>
              our
            </div>
            <div className="flex gap-x-4">
              platform. We look f orward
            </div>
            <div className="flex gap-x-2">
              to
              <span className="inline-block mx-1 font-thin">hearing</span>
              from you!
            </div>
          </h2>
        </div>
      </section>
    </>
  )
}

export default page