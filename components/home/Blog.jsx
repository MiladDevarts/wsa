
import TitleSection from "../layout/TitleSection"
import BlogCard from "./BlogCard"

function Blog() {
  return (
    <>
      <TitleSection title="Blog" link="/blog" />
      <section className="blog-container">
        <BlogCard
          image={""}
          title={"Educational Platforms"}
          summery={"Online learning has exploded since COVID leading consumers to become more and more familiar with online learning tools. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/educational-platforms"
        />
        <BlogCard
          image={"./images/blog/post-1-cover.webp"}
          title={"Advertising Platforms "}
          summery={"Unique audiences and communities have to ask themselves if the mainstream advertising giants have adequately met their particular needs while still respecting their privacy. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/advertising-platforms"
        />
        <BlogCard
          image={"./images/blog/post-5-cover.webp"}
          title={"Brand Development and Investment in Ideas"}
          summery={"Brand development starts with a quality product but needs much more to succeed in the competitive market. "}
          author={"WSA Board"}
          authorAvatar={"/images/logos/circle-logo.svg"}
          date={"14 June, 2023"}
          url="/blog/brand-development"
        />
        <BlogCard
          image={""}
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

export default Blog