import benefitImg from "../../assets/img/benefit.png";

const BenefitSections = () => {
  return (
    <section className="relative overflow-hidden  py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap pb-12 border-b border-gray-50 mb-8">
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="font-heading leading-relaxed text-rhino-700 text-5xl font-semibold mb-6">
              The Power of Sports in Enhancing Well-Being
            </h1>
            <p className="text-rhino-300 text-lg max-w-lg leading-7">
              Engaging in sports not only boosts physical health but also
              sharpens mental acuity, fosters teamwork, and enhances overall
              well-being. Regular physical activity helps to reduce stress,
              improve cardiovascular health, and promote a balanced lifestyle.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img className="rounded-xl lg:ml-auto" src={benefitImg} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/85 w-12 h-12 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 7.5L9 19.5L3 13.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-rhino-500 font-semibold">
                  Easy Online Booking
                </p>
                <p className="text-rhino-400 text-sm font-medium">
                  Book your spot in minutes
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/85 w-12 h-12 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L2 12h3v7h14v-7h3L12 2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-rhino-500 font-semibold">Secure Payments</p>
                <p className="text-rhino-400 text-sm font-medium">
                  100% Payment Protection
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/85 w-12 h-12 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C16.4183 22 20 18.4183 20 14H4C4 18.4183 7.58172 22 12 22Z"
                    fill="white"
                  />
                  <path
                    d="M15.5 2C16.3284 2 17 2.67157 17 3.5V6.5C17 7.32843 16.3284 8 15.5 8H8.5C7.67157 8 7 7.32843 7 6.5V3.5C7 2.67157 7.67157 2 8.5 2H15.5ZM11 12.5C11 12.2348 11.1054 11.9804 11.2929 11.7929C11.4804 11.6054 11.7348 11.5 12 11.5C12.2652 11.5 12.5196 11.6054 12.7071 11.7929C12.8946 11.9804 13 12.2348 13 12.5V19.5C13 19.7652 12.8946 20.0196 12.7071 20.2071C12.5196 20.3946 12.2652 20.5 12 20.5C11.7348 20.5 11.4804 20.3946 11.2929 20.2071C11.1054 20.0196 11 19.7652 11 19.5V12.5ZM18 12.5C18 12.2348 18.1054 11.9804 18.2929 11.7929C18.4804 11.6054 18.7348 11.5 19 11.5C19.2652 11.5 19.5196 11.6054 19.7071 11.7929C19.8946 11.9804 20 12.2348 20 12.5V19.5C20 19.7652 19.8946 20.0196 19.7071 20.2071C19.5196 20.3946 19.2652 20.5 19 20.5C18.7348 20.5 18.4804 20.3946 18.2929 20.2071C18.1054 20.0196 18 19.7652 18 19.5V12.5ZM6 11.5C6.26522 11.5 6.51957 11.6054 6.70711 11.7929C6.89464 11.9804 7 12.2348 7 12.5V19.5C7 19.7652 6.89464 20.0196 6.70711 20.2071C6.51957 20.3946 6.26522 20.5 6 20.5C5.73478 20.5 5.48043 20.3946 5.29289 20.2071C5.10536 20.0196 5 19.7652 5 19.5V12.5C5 12.2348 5.10536 11.9804 5.29289 11.7929C5.48043 11.6054 5.73478 11.5 6 11.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-rhino-500 font-semibold">Available Venues</p>
                <p className="text-rhino-400 text-sm font-medium">
                  Check venue availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSections;
