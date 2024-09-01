import howItWorkImg from "../../assets/img/how-it-work.png"
import SectionHeader from "../shared/SectionHeader";

const HowItWorkSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="How It Works"
          subTitle="How Work"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia alias eius assumenda culpa?"
        />

        <div
          className="relative bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden rounded-4xl"
          style={{
            height: 648,
            backgroundImage: `url("${howItWorkImg}")`,
          }}
          data-config-id="div-a4bc41-1"
        >
          <div className="absolute top-0 left-0 p-14 md:p-20 md:pb-0 overflow-y-auto h-full">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="flex flex-wrap -m-3">
                  <div className="w-auto p-3">
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="svg-a4bc41-1"
                    >
                      <circle cx="17.5" cy="17.5" r="17.5" fill="#10B981" />
                      <path
                        d="M11.667 18.3333L15.0003 21.6666L23.3337 13.3333"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <img
                      className="mx-auto"
                      src="flaro-assets/images/how-it-works/line3.svg"
                      alt=""
                      data-config-id="img-a4bc41-1"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="md:max-w-xs pb-8">
                      <p
                        className="mb-5 text-sm text-gray-400 font-semibold uppercase tracking-px"
                        data-config-id="txt-a4bc41-6"
                      >
                        Step 1
                      </p>
                      <h3
                        className="mb-2 text-xl text-white font-bold leading-normal"
                        data-config-id="txt-a4bc41-2"
                      >
                        Choose A Package
                      </h3>
                      <p
                        className="text-gray-300 font-medium leading-relaxed"
                        data-config-id="txt-a4bc41-7"
                      >
                        Lorem ipsum dolor sit amet, to the consectetur
                        adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap -m-3">
                  <div className="w-auto p-3">
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="svg-a4bc41-2"
                    >
                      <circle cx="17.5" cy="17.5" r="17.5" fill="#10B981" />
                      <path
                        d="M11.667 18.3333L15.0003 21.6666L23.3337 13.3333"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <img
                      className="mx-auto"
                      src="flaro-assets/images/how-it-works/line3.svg"
                      alt=""
                      data-config-id="img-a4bc41-2"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="md:max-w-xs pb-8">
                      <p
                        className="mb-5 text-sm text-gray-400 font-semibold uppercase tracking-px"
                        data-config-id="txt-a4bc41-8"
                      >
                        Step 2
                      </p>
                      <h3
                        className="mb-2 text-xl text-white font-bold leading-normal"
                        data-config-id="txt-a4bc41-3"
                      >
                        Pay with One Click
                      </h3>
                      <p
                        className="text-gray-300 font-medium leading-relaxed"
                        data-config-id="txt-a4bc41-9"
                      >
                        Lorem ipsum dolor sit amet, to the consectetur
                        adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap -m-3">
                  <div className="w-auto p-3">
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="svg-a4bc41-3"
                    >
                      <circle cx="17.5" cy="17.5" r={17} stroke="#CBD5E1" />
                      <path
                        d="M11.667 18.3333L15.0003 21.6666L23.3337 13.3333"
                        stroke="#94A3B8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 p-3">
                    <div className="md:max-w-xs pb-8">
                      <p
                        className="mb-5 text-sm text-gray-400 font-semibold uppercase tracking-px"
                        data-config-id="txt-a4bc41-10"
                      >
                        Step 3
                      </p>
                      <h3
                        className="mb-2 text-xl text-white font-bold leading-normal"
                        data-config-id="txt-a4bc41-4"
                      >
                        Get Instant Access
                      </h3>
                      <p
                        className="text-gray-300 font-medium leading-relaxed"
                        data-config-id="txt-a4bc41-11"
                      >
                        Lorem ipsum dolor sit amet, to the consectetur
                        adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
