
import TitleSection from "../layout/TitleSection"
import ServiceCard from "./ServiceCard"

function Services() {
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