import aboutImgSection from "../../assets/img/about/aboutImgSection.avif"

const ImageSection = () => {
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img
        alt=""
        src={aboutImgSection}
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
};

export default ImageSection;
