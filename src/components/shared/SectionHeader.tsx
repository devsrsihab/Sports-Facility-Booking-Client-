export type TTestimonialProps = {
  title?: string;
  subTitle?: string;
  desc?: string;
  dark?: boolean;
};

const SectionHeader = ({ title, subTitle, desc, dark=true }: TTestimonialProps) => {
  return (
    <div className="relative  z-20  mb-20">
      <span
        className="inline-block z-50 capitalize py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full"
        data-config-id="txt-e9358d-8"
      >
        {subTitle}
      </span>
      <h2 className={`text-4xl mb-5 ${dark ? "text-black" : "text-white"}`}>
        {title}
      </h2>

      <p className={`text-lg w-3/5 ${dark ? "text-black" : "text-white"}`}>
        {desc}
      </p>
    </div>
  );
};

export default SectionHeader;
