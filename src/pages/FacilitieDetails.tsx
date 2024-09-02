import { Link, useParams } from "react-router-dom";
import SinglePageLoader from "../components/shared/loader/SinglePageLoader";
import { useGetSingleFacilitieQuery } from "../redux/features/facilitie/facilitieApi";

const FacilitieDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleFacilitieQuery(id);
  const facilitie = data?.data;


  return (
    <div className="bg-[#f1f2f4]">
      <div className="bg-white max-w-5xl mx-auto flex justify-center">
        <div className="max-w-3xl py-8 px-7 md:py-20 sm:px-6 lg:px-8 w-full">
          {isLoading ? (
            <SinglePageLoader />
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-start  sm:gap-x-8">
              <div className="flex md:justify-center lg:justify-start">
                <div className="w-[240px] border-2 border-gray-200 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={facilitie.image}
                    className="object-cover h-72 object-center w-full "
                  />
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {facilitie.name}
                </h1>
                <div className="flex flex-col gap-5 mt-5">
                  <div>
                    <strong>Location: </strong>
                    <p>{facilitie.location}</p>
                  </div>
                  <div>
                    <strong>Description: </strong>
                    <p>{facilitie.description}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    to={`/booking/${facilitie._id}`}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-3 px-8 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacilitieDetails;
