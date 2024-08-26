export type TSlideProps = {
  img: string;
};

const Slide = ({ img }: TSlideProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-[90vh] w-full"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Slide;
