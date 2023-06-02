"use client"

import Button from "../Button"
import TitleSection from "../layout/TitleSection"
import FAQItem from "./FAQItem"

import { FAQ as FAQD } from "@/data/dummy"

function FAQ() {

  return (
    <>
      <TitleSection title={"FAQ"} link={"/faq"} />
      <section className="container flex flex-col items-center gap-y-6 my-6">
        {
          FAQD.map((item) => {
            return <FAQItem title={item.title} content={item.content} />
          })
        }
        <Button content="All FAQ" link={"/faq"} classes={"mt-6"} />
      </section>
    </>
  )
}

export default FAQ