import { Link } from "react-router-dom";
import homeHero from "../../assets/img/home/homeHero.avif";

const HeroSection = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Book your favorite sports facilities with ease.{" "}
                  <Link
                    to="/facilities"
                    className="whitespace-nowrap font-semibold text-[#008f70]"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Explore Now <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Ultimate Sports Booking Platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reserve courts, fields, and gyms for your favorite sports.
                Whether you're playing basketball, tennis, or soccer, find the
                perfect spot and time for your game.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/facilities"
                  className="rounded-md bg-[#008f70] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#007e62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008f70]"
                >
                  Book Now
                </Link>
                <Link
                  to="/about"
                  className="text-base font-semibold leading-7 text-gray-900 hover:text-[#008f70]"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2a922] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src={homeHero}
          alt="Sports Facilities Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
