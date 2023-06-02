
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
          date={"11 December, 2022"} />

          <BlogCard
          image={"./images/blog/thumbnail-1.png"}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"} />

          <BlogCard
          image={"./images/blog/thumbnail-1.png"}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"} />

          <BlogCard
          image={""}
          title={"WSA will start getting Clients"}
          summery={"WSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting ClientsWSA will start getting Clients"}
          author={"Ryan james"}
          authorAvatar={"./images/profile/avatar-1.png"}
          date={"11 December, 2022"} />

      </section>
    </>
  )
}

export default Blog