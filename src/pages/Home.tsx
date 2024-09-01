import BenefitSections from "../components/home/BenefitSections";
import FeaturedSection from "../components/home/FeaturedSection";
import HeroSection from "../components/home/HeroSection";
import HowItWorkSection from "../components/home/HowItWorkSection";
import Testmonials from "../components/home/Testimonial/Testmonials";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />
      {/* featured section */}
      <FeaturedSection />
      {/* how it work section */}
      <HowItWorkSection />
      {/* testmonial section */}
      <Testmonials />
      {/* benefit section */}
      <BenefitSections />
    </>
  );
};

export default Home;
