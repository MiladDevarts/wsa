
import TitleSection from "../layout/TitleSection"
import ServiceCard from "./ServiceCard"

function Services() {
    return (
        <>
           <TitleSection title="Services" link="/services" />
            <section className="container mt-4 mb-20 lg:grid lg:grid-cols-3 gap-x-6">
               {
                <>
                    <ServiceCard showData={true} serviceTitle="Platform Building" servicelink="/services" />
                    <ServiceCard showBtn={true} serviceTitle="Brand Development" servicelink="/services" />
                    <ServiceCard showBtn={true} serviceTitle="Multipurpose Educational Platform" servicelink="/services"/>
                </>
               }
            </section>
        </>
    )
}

export default Services