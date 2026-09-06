const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6 md:mb-12">
      <h2 className="text-3xl md:text-5xl text-center font-jakarta font-extrabold ">
        {title}
      </h2>
      <div className="h-[4px] w-[100px] rounded-full bg-accent mb-3 md:mb-6 mt-3 mx-auto"></div>
      <p className="text-center text-md text-text font-light font-figtree">
        {subtitle}
      </p>
      
    </div>
  );
};

export default SectionHeader;
