import { useState, useEffect } from "react";

const FacilitieSearchFilter = ({
  facilities,
  onFilterChange,
}: {
  facilities: any;
  isLoading: boolean;
  onFilterChange: (filteredFacilities: any[]) => void;
}) => {
  const [priceFilter, setPriceFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filteredFacilities = facilities;

    if (priceFilter && facilities) {
      const priceRanges: Record<string, any[]> = {
        "0-50": [],
        "50-100": [],
        "100-200": [],
        "200+": [],
      };

      facilities.forEach((venue: any) => {
        const price = venue.pricePerHour;

        if (price <= 50) {
          priceRanges["0-50"].push(venue);
        } else if (price > 50 && price <= 100) {
          priceRanges["50-100"].push(venue);
        } else if (price > 100 && price <= 200) {
          priceRanges["100-200"].push(venue);
        } else if (price > 200) {
          priceRanges["200+"].push(venue);
        }
      });

      filteredFacilities = priceRanges[priceFilter] || facilities;
    }

    if (searchTerm) {
      filteredFacilities = filteredFacilities.filter((venue: any) =>
        venue.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    onFilterChange(filteredFacilities);
  }, [priceFilter, searchTerm, facilities, onFilterChange]);

  return (
    <div className="flex gap-10 w-1/2 items-center">
      <div className="filter">
        <select
          onChange={(e) => setPriceFilter(e.target.value)}
          className="bg-gray-50 p-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select a price range</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200+">$200+</option>
        </select>
      </div>
      <div className="search grow">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search facilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FacilitieSearchFilter;
