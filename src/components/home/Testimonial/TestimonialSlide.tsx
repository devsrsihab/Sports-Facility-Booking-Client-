import TestQuate from "../../../assets/img/testimonial/quote.svg"
//  make tyupe for props
export type TTestimonialSlideProps = {
  title: string;
  review: string;
  img: string;
  clientName: string;
};

const TestimonialSlide = ({
  title,
  review,
  img,
  clientName,
}: TTestimonialSlideProps) => {
  return (
    <div
      x-ref="slide1"
      className="w-full max-w-lg md:max-w-4xl px-4 flex-shrink-0"
    >
      <div className="px-6 py-12 xs:pl-12 xs:pr-14 bg-yellow-50 rounded-3xl">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-2/5 px-4 mb-6 lg:mb-0">
            <img
              className="block w-full h-full object-cover rounded-3xl"
              src={img}
              alt=""
              data-config-id="img-e9358d-1"
            />
          </div>
          <div className="w-full md:w-3/5 px-4">
            <div>
              <img
                className="block mb-4 w-11  object-cover rounded-full"
                src={TestQuate}
                alt=""
                data-config-id="img-e9358d-2"
              />
              <h4
                className="text-3xl leading-relaxed font-semibold text-gray-900 mb-6"
                data-config-id="txt-e9358d-1"
              >
                {title}
              </h4>
              <p
                className="text-gray-500 mb-5 text-lg"
                data-config-id="txt-e9358d-5"
              >
                {review}
              </p>
              <span
                className="font-semibold text-orange-900"
                data-config-id="txt-e9358d-11"
              >
                {clientName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
