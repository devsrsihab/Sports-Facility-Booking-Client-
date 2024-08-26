import { Carousel } from "antd";
import "../../../App.css";
import Slide from "../../Slider/Slide";

const NewArrivals = () => {


  return (
    <div className="bg-blue-d  ">
      <h2 className="text-xl ml-4 font-bold text-gray-900">New Arrivals</h2>

      <div className="mx-auto ">
        <div className="-mx-px  border-l border-gray-200  mt-6  sm:mx-0 ">
          <Carousel
            className="custom-carousel"
            slidesToShow={1}
            slidesToScroll={1}
            arrows
            adaptiveHeight
            infinite={true}
            draggable
            effect="scrollx"
            // autoplay
          >
            {/* give unsplash rimg url 1990x1080 not random */}
            <Slide img="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=1920&auto=format" />
            <Slide img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Slide img="https://images.unsplash.com/photo-1485313260896-6e6edf486858?q=80&w=1920&auto=format" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
