import RelatedCard from "@/components/blog/RelatedCard"
import NavBar from "@/components/layout/NavBar"

function page() {
  return (
    <>
      <section className="flex items-center w-full h-[900px] lg:h-screen bg-cover bg-center mb-20 -mt-32 -z-50" style={{ backgroundImage: `url('/images/projects/cover-1.jpg')` }}>
        <div className="container text-white">
          <span className="text-6xl lg:text-9xl font-mono font-bold">
            01
          </span>
          <h2 className="font-bold text-xl my-10">
            Providing a multipurpose educational platform
          </h2>
          <p className="max-w-2xl font-light">
            We believe that education is the foundation for a better future. This platform is designed to provide high-quality educational resources to learners of all ages and backgrounds
          </p>
        </div>
      </section>
      <section className='container my-20'>
        <p className='text-white text-lg leading-8 my-8'>
        We strive to make learning fun, engaging, and interactive through our innovative teaching methods and cutting-edge technology.        </p>
        <p className='text-[#B5B5B5] text-lg leading-8 my-8'>
        Our team is made up of experienced educators and industry experts who are passionate about empowering learners to reach their full potential. We are dedicated to creating a supportive and inclusive learning community where all learners can thrive and achieve their goals
        </p>
      </section>
    </>
  )
}

export default page