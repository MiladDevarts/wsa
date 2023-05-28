import Button from '@/components/Button'
import Head from 'next/head'

function notFound() {
  return (
    <>
      <Head>
      </Head>
      <section className="container flex flex-col items-center my-10 overflow-x-hidden">
        <img src="./images/errors/not-found.png" className="w-full lg:max-w-2xl" alt="" />
        <div className="flex flex-col items-center">
          <h2 className='text-white text-3xl font-bold mb-3'>
             we have lost this page
          </h2>
          <p className='text-zinc-400 font-sans mb-8'>
          Sorry the page you're looking for doesn't exist or has been removed
          </p>
          <Button content={"Back to home"} outline={false} link={"/"} />
        </div>
      </section>
    </>
  )
}

export default notFound