
import Button from '@/components/Button'

function notFound() {
  return (
    <>
      <section className="container flex flex-col items-center my-10 overflow-x-hidden">
        <img src="/images/errors/not-found.png" className="w-full lg:max-w-2xl" alt="" />
        <div className="flex flex-col gap-y-5 items-center">
          <h2 className='text-white text-xl lg:text-[26px] font-bold mb-3 font-mono text-center'>
            we have lost this page
          </h2>
          <p className='text-zinc-400 font-sans mb-8 text-lg text-center leading-8'>
            Sorry the page you're looking for doesn't 
            <br/>
            exist or has been removed
          </p>
          <Button content={"Back to home"} classes={"w-40"} outline={false} link={"/"} />
        </div>
      </section>
    </>
  )
}

export default notFound