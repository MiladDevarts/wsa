
import TitleSection from "../layout/TitleSection"
import BlogCard from "./BlogCard"

function Blog() {
  return (
    <>
      <TitleSection title="Blog" link="/blog" />
      <section className="blog-container">

        <BlogCard
          image={""}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"}
          url="/"
          />
          
          <BlogCard
          image={"./images/blog/post-1-cover.jpg"}
          title={"Advertising Platforms "}
          summery={"Unique audiences and communities have to ask themselves if the mainstream advertising giants have adequately met their particular needs while still respecting their privacy. "}
          author={"WSA Board"}
          authorAvatar={"./images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/advertising-platforms"
          />

          <BlogCard
          image={"./images/blog/thumbnail-1.png"}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"}
          url="/"
          />

          <BlogCard
          image={""}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"}
          url="/"
          />

      </section>
    </>
  )
}

export default Blog