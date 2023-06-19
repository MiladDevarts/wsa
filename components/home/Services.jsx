"use client"

import TitleSection from "../layout/TitleSection"
import ServiceCard from "./ServiceCard"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function Services() {

    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 160px)": {
                slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 3, spacing: 10 },
        range: {
            min: -5,
            max: 5,
        },
        renderMode: "performance",
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

    return (
        <>
           <TitleSection title="Services" link="/services" />
            <section className="container mt-4 mb-20 grid lg:grid-cols-3 gap-y-8 lg:gap-x-6">
               {
                <>
                    <ServiceCard animationDelay={"100"} showData={true} serviceTitle="Platform Building" servicelink="/services" />
                    <ServiceCard animationDelay={"150"} showBtn={true} serviceTitle="Brand Development" servicelink="/services" />
                    <ServiceCard animationDelay={"180"} showBtn={true} serviceTitle="Multipurpose Educational Platform" servicelink="/services"/>
                </>
               }
            </section>
        </>
    )
}

export default Services