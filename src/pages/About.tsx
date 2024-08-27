import AboutHero from "../components/about/AboutHero";
import Brands from "../components/about/Brands";
import ContactAdress from "../components/about/ContactAdress";
import ImageSection from "../components/about/ImageSection";
import MileStone from "../components/about/MileStone";
import OurMission from "../components/about/OurMission";
import TeamSecton from "../components/about/TeamSecton";

const About = () => {
  return (
    <div className="bg-white">
      
       <div className="isolate">
          {/* hero section */}
          <AboutHero />
          {/* mission section */}
          <OurMission />
          {/* Image section */}
          <ImageSection />
          {/* Milestone section */}
          <MileStone />
          {/* Brands cloud */}
          <Brands />
          {/* Team section */}
          <TeamSecton />
          {/* contact section */}
          <ContactAdress />
       </div>

    </div>
  );
};

export default About;
