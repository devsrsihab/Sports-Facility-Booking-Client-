import FacilitieCard from "../Facilities/FacilitieCard";

const FeaturedSection = () => {
  const sectionBgImg =
    "http://www.nicdarkthemes.com/themes/tennis/wp/demo/tennis-club/wp-content/uploads/sites/2/2021/02/parallax-4.jpg";

  const parentDivStyle = {
    backgroundImage: `url(${sectionBgImg})`,
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={parentDivStyle} className="py-28 px-10 relative">
      {/* The overlay should have a lower z-index than the content */}
      <div className="absolute inset-0 bg-black opacity-30 z-10 "></div>

      {/* Content wrapper with a higher z-index */}
      <div className="relative z-20 text-center mb-40">
        <h2 className="text-4xl mb-5 text-white">Featured Facilities</h2>
        <p className="text-lg w-2/5 mx-auto text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          reprehenderit accusamus odit veniam, nesciunt incidunt eos iure quo
          facilis. Ut, vel ipsam?
        </p>
      </div>

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
