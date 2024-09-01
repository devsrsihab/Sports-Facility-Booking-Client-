import { Link } from "react-router-dom";
import { titleShorter } from "../../utils/titleShorter";
import { TFacilitieCardProps } from "../../types/facilitie.type";

type FacilitieCardProps = {
  facilitie: TFacilitieCardProps;
};

const FacilitieCard = ({ facilitie }: FacilitieCardProps) => {
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <div className="relative">
            <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
              <img
                src={facilitie.image}
                alt={facilitie.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="relative mt-4 px-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {titleShorter(facilitie.name)}
              </h3>
              {facilitie.description && (
                <p className="mt-2 text-sm text-gray-600">
                  {facilitie.description}
                </p>
              )}
            </div>

            <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-t-lg p-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-60"
              />
              <p className="relative text-xl font-bold text-white">
                ${facilitie.pricePerHour} / hr
              </p>
            </div>
          </div>

          <Link to={`/facilities/${facilitie._id}`}>
            <div className="mt-6 flex justify-center">
              <span className="relative flex items-center justify-center rounded-md border border-transparent bg-[#008f70] py-2 px-8 text-sm font-medium text-white hover:bg-[#007c63]">
                View Details
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilitieCard;
