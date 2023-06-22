"use client"

import TitleSection from "../layout/TitleSection"
import ServiceCard from "./ServiceCard"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import ServiceCardMb from "./ServiceCardMb"

function Services() {

    const [sliderRef] = useKeenSlider(
        {
            breakpoints: {
                "(min-width: 160px)": {
                    slides: { perView: 1.5, spacing: 20 },
                },
                "(min-width: 768px)": {
                    slides: { perView: 0, spacing: 20 },
                },
            },
            loop: false,

            slides: { origin: "center", perView: 3, spacing: 10 },
            range: {
                min: -5,
                max: 5,
            }
        })

    return (
        <>
            <TitleSection title="Services" link="/services" />
            <section className="hidden container mt-4 mb-20 lg:grid lg:grid-cols-3 gap-y-8 lg:gap-x-6">
                {
                    <>
                        <ServiceCard animationDelay={"100"} showData={true} serviceTitle="Platform Building" servicelink="/services" />
                        <ServiceCard animationDelay={"150"} showBtn={true} serviceTitle="Brand Development" servicelink="/services" />
                        <ServiceCard animationDelay={"180"} showBtn={true} serviceTitle="Multipurpose Educational Platform" servicelink="/services" />
                    </>
                }
            </section>
            <section ref={sliderRef} className="keen-slider flex lg:flex container mt-4 mb-20">
                {
                    <>
                        <ServiceCardMb serviceTitle="Platform Building" serviceImage="/images/service/build-platforms.png" servicelink="/services" serviceSummery={"We assist businesses, individuals, and institutions develop scalable web solutions, designs and interoperable content while assessing and managing privacy and security risks."} />
                        <ServiceCardMb serviceTitle="Brand Development" serviceImage="/images/service/brand-development.png" servicelink="/services" serviceSummery={"Our goal is to deliver a consistent brand experience across multiple platforms and devices. We cater to the customer to develop a custom brand tailored to their specifications. "} />
                        <ServiceCardMb serviceTitle="Art Management" serviceImage="/images/service/art-management.png" servicelink="/services" serviceSummery={"The art management team (AMT) serves as a buffer between the artist and the business. Represents the artist and prioritizes the artist’s best interests. "} />
                    </>
                }
            </section>
        </>
    )
}

export default Services