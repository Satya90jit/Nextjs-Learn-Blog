import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="my-24">
        <HeroSection />
        <ServiceSection />
      </section>
      <Footer />
    </>
  );
};

export default Home;
