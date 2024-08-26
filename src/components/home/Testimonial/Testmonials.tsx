import { Carousel, ConfigProvider } from "antd";
import TestimonialSlide from "./TestimonialSlide";
import TestImg1 from "../../../assets/img/testimonial/test-1.png";
import TestImg2 from "../../../assets/img/testimonial/test-2.png";
import TestImg3 from "../../../assets/img/testimonial/test-3.png";
import Container from "../../shared/Container";

const Testmonials = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-wrap -mx-4 items-center mb-20">
          <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
            <span
              className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full"
              data-config-id="txt-e9358d-8"
            >
              TESTIMONIALS
            </span>
            <h1 className="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
              <span data-config-id="txt-e9358d-9">What our clients</span>
              <span
                className="font-serif italic"
                data-config-id="txt-e9358d-10"
              >
                said
              </span>
            </h1>
            <p className="text-gray-500" data-config-id="txt-e9358d-4">
              Risus viverra justo sagittis vestibulum metus.
            </p>
          </div>
        </div>
      </Container>

      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotOffset: -16, // Set your desired offset value
              dotWidth: 16,
              dotHeight: 3,
              dotGap: 4,
              dotActiveWidth: 24,
              arrowSize: 20, // Optionally adjust the size of the arrows
              // You can also customize other properties here
            },
          },
        }}
      >
        <Carousel
          className="custom-carousel testimonail_carausel"
          slidesToShow={2}
          slidesToScroll={1}
          adaptiveHeight
          draggable
        >
          <TestimonialSlide
            title="Saturn is absolutely fabulous to work with!"
            img={TestImg1}
            review="Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum."
            clientName="Beby Nirmala"
          />
          <TestimonialSlide
            title="Saturn is absolutely fabulous to work with!"
            img={TestImg2}
            review="Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum."
            clientName="Beby Nirmala"
          />
          <TestimonialSlide
            title="Saturn is absolutely fabulous to work with!"
            img={TestImg3}
            review="Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum."
            clientName="Beby Nirmala"
          />
        </Carousel>
      </ConfigProvider>
    </div>
  );
};

export default Testmonials;
