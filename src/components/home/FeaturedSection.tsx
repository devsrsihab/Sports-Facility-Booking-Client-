import FacilitieCard from "../Facilities/FacilitieCard";
import SectionHeader from "../shared/SectionHeader";

const FeaturedSection = () => {
  const sectionBgImg =
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1920";

  const parentDivStyle = {
    backgroundImage: `url(${sectionBgImg})`,
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={parentDivStyle} className=" px-10  py-24 relative">
      {/* The overlay should have a lower z-index than the content */}
      <div className="absolute inset-0 bg-black opacity-30 z-10 "></div>

      {/* page header */}
      <SectionHeader
        dark={false}
        title="Featured Facilities"
        subTitle="All Facilities"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia alias eius assumenda culpa?"
      />

      <div className="relative z-20 mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <FacilitieCard />
        <FacilitieCard />
        <FacilitieCard />
        <FacilitieCard />
        <FacilitieCard />
      </div>
    </div>
  );
};

export default FeaturedSection;
