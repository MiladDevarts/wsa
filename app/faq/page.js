import FAQItem from "@/components/home/FAQItem"
import { FAQ as FAQData } from "@/data/dummy"

function page() {
  return (
    <>
      <section className='container my-36'>
        <h1 className='text-4xl lg:text-8xl font-mono font-semibold text-white'>
          FAQ
        </h1>
      </section>
      <section className="container flex flex-col items-center gap-y-6 my-6">
        {
          FAQData.map((item) => {
            return <FAQItem title={item.title} content={item.content} />
          })
        }
      </section>
    </>
  )
}

export default page