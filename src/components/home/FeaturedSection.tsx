import FacilitieCard from "../Facilities/FacilitieCard";
import SectionHeader from "../shared/SectionHeader";
import homeFeaturedImg from "../../assets/img/home/homeFeatured.jpeg"
import { useGetAllFacilitieQuery } from "../../redux/features/facilitie/facilitieApi";
import PulsLoader from "../shared/loader/PulsLoader";
import NotFound404 from "../shared/result/NotFound404";
import { TFacilitieCardProps } from "../../types/facilitie.type";

const FeaturedSection = () => {

  const parentDivStyle = {
    backgroundImage: `url(${homeFeaturedImg})`,
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  
    const { data, isLoading } = useGetAllFacilitieQuery(undefined);
    const facilities = data?.data;

  return (
    <div style={parentDivStyle} className="px-10  py-24 relative">
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
        {isLoading ? (
          <PulsLoader />
        ) : facilities?.length === 0 ? (
          <NotFound404 />
        ) : (
          <>
            {facilities?.map((facilitie: Partial<TFacilitieCardProps>) => (
              <FacilitieCard
                key={facilitie._id}
                facilitie={facilitie as TFacilitieCardProps}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedSection;
