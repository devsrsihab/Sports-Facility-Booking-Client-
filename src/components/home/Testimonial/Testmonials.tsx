import { Carousel, ConfigProvider } from "antd";
import TestimonialSlide from "./TestimonialSlide";
import TestImg1 from "../../../assets/img/testimonial/test-1.png";
import TestImg2 from "../../../assets/img/testimonial/test-2.png";
import TestImg3 from "../../../assets/img/testimonial/test-3.png";
import SectionHeader from "../../shared/SectionHeader";

const Testmonials = () => {
  return (
    <div className="px-8 py-24">
      <SectionHeader
        title="Testimonial"
        subTitle="What Our Clients Say"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Interdum et malesuada fames ac ante ipsum primis in faucibus."
      />

      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotOffset: -16,
              dotWidth: 16,
              dotHeight: 3,
              dotGap: 4,
              dotActiveWidth: 24,
              arrowSize: 20,
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
          dots
        >
          <div>
            <TestimonialSlide
              title="Saturn is absolutely fabulous to work with!"
              img={TestImg1}
              review="Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum."
              clientName="Beby Nirmala"
            />
          </div>
          <div>
            <TestimonialSlide
              title="Saturn is absolutely fabulous to work with!"
              img={TestImg2}
              review="Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum."
              clientName="Beby Nirmala"
            />
          </div>
          <div>
            <TestimonialSlide
              title="Saturn is absolutely fabulous to work with!"
              img={TestImg3}
              review="Sit at facilisis pulvinar enim ut vulputate. Semper odio cras iaculis tristique adipiscing congue sodales. Id sapien imperdiet tortor id aliquam ac et. Amet pulvinar gravida urna tincidunt at erat sapien a sit. Facilisi tellus habitant vestibulum magna vitae quam erat rutrum ipsum."
              clientName="Beby Nirmala"
            />
          </div>
        </Carousel>
      </ConfigProvider>
    </div>
  );
};

export default Testmonials;
