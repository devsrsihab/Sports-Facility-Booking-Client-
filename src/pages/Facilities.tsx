import { useState } from "react";
import FacilitieCard from "../components/Facilities/FacilitieCard";
import FacilitieSearchFilter from "../components/Facilities/FacilitieSearchFilter";
import PulsLoader from "../components/shared/loader/PulsLoader";
import NotFound404 from "../components/shared/result/NotFound404";
import SectionHeader from "../components/shared/SectionHeader";
import { useGetAllFacilitieQuery } from "../redux/features/facilitie/facilitieApi";
import { TFacilitieCardProps } from "../types/facilitie.type";
import { Pagination } from "antd";

const Facilities = () => {
    const [page, setPage] = useState(1);

  const { data, isLoading } = useGetAllFacilitieQuery([
    { name: "limit", value: 8 },
    { name: "page", value: page },
  ]);
  const facilities = data?.data;
  const metaData = data?.meta;

  const [filteredFacilities, setFilteredFacilities] = useState<
    TFacilitieCardProps[] | undefined
  >(facilities);

  const handleFilterChange = (filteredData: any[]) => {
    setFilteredFacilities(filteredData);
  };

  return (
    <div className="px-10 py-24">
      <div className="px-8">
        <SectionHeader
          subTitle="Facilities"
          title="Let’s see how it works"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."
        />
      </div>
      <div className="px-8">
        <FacilitieSearchFilter
          isLoading={isLoading}
          facilities={facilities}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div
        className={`relative z-20 mt-8 grid gap-y-12 sm:gap-x-6 xl:gap-x-8 ${
          filteredFacilities?.length === 0
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {isLoading ? (
          <PulsLoader />
        ) : filteredFacilities?.length === 0 ? (
          <NotFound404 />
        ) : (
          filteredFacilities?.map((facilitie: Partial<TFacilitieCardProps>) => (
            <FacilitieCard
              key={facilitie._id}
              facilitie={facilitie as TFacilitieCardProps}
            />
          ))
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination
          onChange={(value) => setPage(value)}
          current={page}
          pageSize={metaData?.limit}
          total={metaData?.total}
        />
      </div>
    </div>
  );
};

export default Facilities;
