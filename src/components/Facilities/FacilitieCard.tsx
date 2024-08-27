import { Link } from "react-router-dom";
import { titleShorter } from "../../utils/titleShorter";

export type TFacilitieCardProps = {
  _id?: string;
  name?: string;
  img?: string;
  price?: number;
  description?: string | null;
  buttonVisible?: boolean;
};

const FacilitieCard = ({
  _id,
  name = "Facilitie Name",
  img = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  price = 10,
  description = "Facilitie Description",
  buttonVisible = true,
}: TFacilitieCardProps) => {
  return (
    <div className="bg-white rounded">
      <div className="mx-auto max-w-2xl px-4 py-8  sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <div className="relative">
            <div className="relative h-72 w-full overflow-hidden rounded-lg">
              <img
                src={img}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="relative mt-4">
              <h3 className="text-sm font-medium text-gray-900">
                {titleShorter(name)}
              </h3>
              {description && (
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              )}
            </div>
            <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                ${price} hr
              </p>
            </div>
          </div>
          {buttonVisible && (
            <Link to={`/facilities/${_id}`}>
              <div className="mt-6">
                <a className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200">
                  View Details
                </a>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacilitieCard;
