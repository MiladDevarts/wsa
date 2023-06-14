"use client"

import RelatedCard from "@/components/blog/RelatedCard"
import Overlay from "@/components/layout/Overlay"

import { MenuContext } from "@/context/MenuProvider"
import { useContext } from "react"

function page() {

  let menuVisibility = useContext(MenuContext)

  return (
    <>

      {
        menuVisibility.menu && <Overlay />
      }

      <section className='container flex flex-col gap-y-4 items-center mt-28 text-white'>
        <span>
          14 June, 2023
        </span>
        <h1 className='font-bold text-3xl'>
          Advertising Platforms
        </h1>
        <div className="flex items-center gap-x-2">
          <img src={"/images/logos/circle-logo.svg"} className="w-10" alt="" />
          <span className="text-sm font-semibold">
            WSA Board
          </span>
        </div>
      </section>

      <section className='container flex gap-x-4 mt-20'>
        <a href="#">
          <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4813 13.0535C17.2155 13.3193 16.7938 13.3193 16.5372 13.0535C16.2713 12.7876 16.2713 12.366 16.5372 12.1093C18.3705 10.276 18.3705 7.2968 16.5372 5.47263C14.7038 3.64847 11.7247 3.6393 9.90049 5.47263C8.07633 7.30596 8.06716 10.2851 9.90049 12.1093C10.1663 12.3751 10.1663 12.7968 9.90049 13.0535C9.63466 13.3193 9.21299 13.3193 8.95633 13.0535C6.60049 10.6976 6.60049 6.86596 8.95633 4.5193C11.3122 2.17263 15.1438 2.16347 17.4905 4.5193C19.8372 6.87513 19.8372 10.6976 17.4813 13.0535Z" fill="white" />
            <path d="M4.51998 8.94645C4.78581 8.68061 5.20748 8.68061 5.46414 8.94645C5.72998 9.21228 5.72998 9.63395 5.46414 9.89061C3.63081 11.7239 3.63081 14.7031 5.46414 16.5273C7.29748 18.3514 10.2766 18.3606 12.1008 16.5273C13.925 14.6939 13.9341 11.7148 12.1008 9.89061C11.835 9.62478 11.835 9.20311 12.1008 8.94645C12.3666 8.68061 12.7883 8.68061 13.045 8.94645C15.4008 11.3023 15.4008 15.1339 13.045 17.4806C10.6891 19.8273 6.85748 19.8364 4.51081 17.4806C2.16414 15.1248 2.16414 11.3023 4.51998 8.94645Z" fill="white" />
          </svg>
        </a>
        <a href="#">
          <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5868 5.49935C19.881 5.82018 19.1202 6.03102 18.3318 6.13185C19.1385 5.64602 19.7618 4.87602 20.0552 3.95018C19.2943 4.40852 18.451 4.72935 17.5618 4.91268C16.8377 4.12435 15.8202 3.66602 14.6652 3.66602C12.511 3.66602 10.751 5.42602 10.751 7.59852C10.751 7.91018 10.7877 8.21268 10.8518 8.49685C7.58849 8.33185 4.68266 6.76435 2.74849 4.39018C2.40932 4.96768 2.21682 5.64602 2.21682 6.36102C2.21682 7.72685 2.90432 8.93685 3.96766 9.62435C3.31682 9.62435 2.71182 9.44102 2.18016 9.16602V9.19352C2.18016 11.1002 3.53682 12.6952 5.33349 13.0527C4.75666 13.2105 4.15108 13.2325 3.56432 13.1168C3.8133 13.8983 4.3009 14.5821 4.95859 15.072C5.61628 15.562 6.41098 15.8336 7.23099 15.8485C5.84098 16.9489 4.11799 17.5437 2.34516 17.5352C2.03349 17.5352 1.72182 17.5168 1.41016 17.4802C3.15182 18.5985 5.22349 19.2493 7.44182 19.2493C14.6652 19.2493 18.6343 13.2543 18.6343 8.05685C18.6343 7.88268 18.6343 7.71768 18.6252 7.54352C19.3952 6.99352 20.0552 6.29685 20.5868 5.49935Z" fill="white" />
          </svg>
        </a>
        <a href="#">
          <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8415 1.83301H7.15982C3.82315 1.83301 1.83398 3.82217 1.83398 7.15884V14.8313C1.83398 18.1772 3.82315 20.1663 7.15982 20.1663H14.8323C18.169 20.1663 20.1582 18.1772 20.1582 14.8405V7.15884C20.1673 3.82217 18.1782 1.83301 14.8415 1.83301ZM11.0007 14.5563C9.03898 14.5563 7.44398 12.9613 7.44398 10.9997C7.44398 9.03801 9.03898 7.44301 11.0007 7.44301C12.9623 7.44301 14.5573 9.03801 14.5573 10.9997C14.5573 12.9613 12.9623 14.5563 11.0007 14.5563ZM16.4273 6.30634C16.3815 6.41634 16.3173 6.51717 16.2348 6.60884C16.1432 6.69134 16.0423 6.75551 15.9323 6.80134C15.8223 6.84717 15.7032 6.87467 15.584 6.87467C15.3365 6.87467 15.1073 6.78301 14.9332 6.60884C14.8507 6.51717 14.7865 6.41634 14.7407 6.30634C14.6948 6.19634 14.6673 6.07717 14.6673 5.95801C14.6673 5.83884 14.6948 5.71967 14.7407 5.60967C14.7865 5.49051 14.8507 5.39884 14.9332 5.30717C15.144 5.09634 15.4648 4.99551 15.7582 5.05967C15.8223 5.06884 15.8773 5.08717 15.9323 5.11467C15.9873 5.13301 16.0423 5.16051 16.0973 5.19717C16.1432 5.22467 16.189 5.27051 16.2348 5.30717C16.3173 5.39884 16.3815 5.49051 16.4273 5.60967C16.4732 5.71967 16.5007 5.83884 16.5007 5.95801C16.5007 6.07717 16.4732 6.19634 16.4273 6.30634Z" fill="white" />
          </svg>
        </a>
        <a href="#">
          <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1488 10.4592C19.8371 5.14258 15.0063 1.04509 9.44209 1.96175C5.61042 2.59425 2.5396 5.70174 1.94376 9.5334C1.59543 11.7517 2.05378 13.8509 3.05295 15.5834L2.2371 18.6176C2.05377 19.3051 2.68625 19.9284 3.36459 19.7359L6.35293 18.9109C7.7096 19.7084 9.29543 20.1667 10.9913 20.1667C16.1613 20.1667 20.4513 15.6109 20.1488 10.4592ZM15.4738 14.4101C15.3913 14.5751 15.2904 14.7309 15.1621 14.8776C14.9329 15.1251 14.6854 15.3084 14.4104 15.4184C14.1354 15.5376 13.8329 15.5926 13.5121 15.5926C13.0446 15.5926 12.5404 15.4826 12.0179 15.2534C11.4863 15.0243 10.9638 14.7217 10.4413 14.3459C9.90962 13.9609 9.4146 13.5301 8.93794 13.0626C8.46127 12.5859 8.03958 12.0817 7.65458 11.5592C7.27875 11.0367 6.97626 10.5142 6.75626 9.99174C6.53626 9.46924 6.42628 8.96508 6.42628 8.48842C6.42628 8.17675 6.48127 7.87425 6.59127 7.59925C6.70127 7.31508 6.87545 7.05842 7.12295 6.82925C7.41629 6.53592 7.7371 6.39842 8.07627 6.39842C8.2046 6.39842 8.33291 6.42591 8.45208 6.48091C8.57124 6.53591 8.68127 6.61841 8.76377 6.73758L9.82708 8.2409C9.90958 8.36006 9.97375 8.4609 10.0104 8.56174C10.0563 8.66257 10.0746 8.75423 10.0746 8.8459C10.0746 8.9559 10.0379 9.06592 9.97377 9.17592C9.90961 9.28592 9.82708 9.3959 9.71708 9.5059L9.36874 9.87256C9.31374 9.92756 9.29545 9.98258 9.29545 10.0559C9.29545 10.0926 9.30458 10.1292 9.31374 10.1659C9.33208 10.2026 9.34128 10.2301 9.35045 10.2576C9.43295 10.4134 9.57959 10.6059 9.78125 10.8442C9.99209 11.0826 10.2121 11.3301 10.4505 11.5684C10.698 11.8159 10.9363 12.0359 11.1838 12.2467C11.4221 12.4484 11.6237 12.5859 11.7796 12.6684C11.8071 12.6776 11.8346 12.6959 11.8621 12.7051C11.8988 12.7234 11.9354 12.7234 11.9813 12.7234C12.0638 12.7234 12.1188 12.6959 12.1738 12.6409L12.5221 12.2926C12.6412 12.1734 12.7513 12.0909 12.8521 12.0359C12.9621 11.9717 13.0629 11.9351 13.1821 11.9351C13.2738 11.9351 13.3654 11.9534 13.4663 11.9992C13.5671 12.0451 13.6771 12.1001 13.7871 12.1826L15.3088 13.2642C15.4279 13.3467 15.5104 13.4476 15.5654 13.5576C15.6113 13.6767 15.6388 13.7867 15.6388 13.9151C15.5838 14.0709 15.5471 14.2451 15.4738 14.4101Z" fill="white" />
          </svg>
        </a>
      </section>

      <section className="w-full h-[700px] my-10 bg-white bg-cover bg-center bg-top-[20px]" style={{ backgroundImage: `url('/images/blog/post-1-cover.jpg')` }}></section>

      <section className='container my-20'>
        <p className='text-white text-lg leading-8 my-8'>
          - Unique audiences and communities have to ask themselves if the mainstream advertising giants have adequately met their particular needs while still respecting their privacy.
        </p>
        <p className='text-[#B5B5B5] text-lg leading-8 my-8'>
          Meta is one of the largest and fastest growing advertising platforms because of its high level of customization and large number of daily users.
        </p>
        <p className='text-[#B5B5B5] text-lg leading-8 my-8'>
          Meta’s success comes at the cost of user privacy. Google remains a leading advertising platform but has a similar achilles heel.
        </p>
        <p className='text-[#B5B5B5] text-lg leading-8 my-8'>
          In addition, leading brands are taking a more proactive role in their web marketing by directing their focus on multiethnic growth and other new audiences.
        </p>
        <p className='text-white text-lg leading-8 my-8'>
          Despite these current trends, certain communities remain mostly ignored and should begin to take matters in their own hands.
        </p>
        <p className='text-white text-lg leading-8 my-8'>
          In order to reach both the leading areas of advertising growth such as Meta and Google, while focussing on underserved markets, WSA has decided to create the first custom platform for advertising and business marketing that allows users to individually select integration with Google, Meta, and other large advertisers.
        </p>
        <p className='text-white text-lg leading-8 my-8'>
          This new platform allows every community to create a custom directory of professionals, businesses, and artists.
        </p>
        <p className='text-white text-lg leading-8 my-8'>
          Professionals, businesses, and artists can create their business profiles, build their websites, add their links, calendar their events, and most importantly, access large advertisers directly from their dashboards.
        </p>
        <p className='text-white text-lg leading-8 my-8'>
          Thus each community is served directly without losing any of the benefits provided by the leading advertising platforms
        </p>

      </section>
      <section className="container flex flex-col lg:flex-row gap-x-4 my-60">

        <RelatedCard
          image={"/images/blog/post-2-cover.jpg"}
          title={"Educational Platforms"}
          summery={"Online learning has exploded since COVID leading consumers to become more and more familiar with online learning tools. "}
          author={"WSA Board"}
          authorAvatar={"./images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/educational-platforms"
        />

        <RelatedCard
          image={"/images/blog/post-3-cover.jpg"}
          title={"Organic/Green Online Shop Direct to Consumer (no plastics)"}
          summery={"There is a huge consumer demand to get away from cheap mass manufacturing and plastic products. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/organic-shop"
          />

        <RelatedCard
          image={"/images/blog/post-4-cover.jpg"}
          title={"Company Communication & Scheduling Platform"}
          summery={"Business apps are the leading way for employers to efficiently interact with their employees. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/company-communication"
          />

      </section>
    </>
  )
}

export default page