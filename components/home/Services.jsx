
import TitleSection from "../layout/TitleSection"
import ServiceCard from "./ServiceCard"

function Services() {
    return (
        <>
           <TitleSection title="Services" link="/services" />
            <section className="container mt-4 mb-20 lg:grid lg:grid-cols-3">
               {
                <ServiceCard />
               }
            </section>
        </>
    )
}

export default Services