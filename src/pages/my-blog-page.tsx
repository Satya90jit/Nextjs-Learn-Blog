import BlogHeroSection from "@/components/BlogPage/BlogHeroSection";
import BlogServiceSection from "@/components/BlogPage/BlogServiceSection";

const MyBlogPage = () => {
  return (
    <section className="bg-white p-6 rounded-xl">
      <BlogHeroSection />
      <BlogServiceSection />
    </section>
  );
};

export default MyBlogPage;
