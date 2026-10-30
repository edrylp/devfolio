const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6 md:mb-12">
      <h2 className="text-3xl md:text-5xl text-center font-jakarta font-extrabold ">
        {title}
      </h2>
      <div className="h-1 w-25 rounded-full mb-3 md:mb-6 mt-3 mx-auto bg-[linear-gradient(135deg,var(--primary)_0%,var(--accent)_70%,var(--secondary)_100%)]"></div>
      <p className="text-center text-md text-text font-light font-figtree">
        {subtitle}
      </p>
      
    </div>
  );
};

export default SectionHeader;
