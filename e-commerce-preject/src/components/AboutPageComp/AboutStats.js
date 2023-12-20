const AboutStats = () => {
  return (
    <div className="flex pt-20 pb-20 justify-evenly flex-col xl:flex-row">
      <div className="flex flex-col text-center pb-16 xl:pb-0">
        <p className="text-[#252B42] text-[58px] font-bold">15K</p>
        <p className="text-[#737373] font-bold">Happy Customers</p>
      </div>
      <div className="flex flex-col text-center pb-16 xl:pb-0">
        <p className="text-[#252B42] text-[58px] font-bold">150K</p>
        <p className="text-[#737373] font-bold">Monthly Visitors</p>
      </div>
      <div className="flex flex-col text-center pb-16 xl:pb-0">
        <p className="text-[#252B42] text-[58px] font-bold">15</p>
        <p className="text-[#737373] font-bold">Countries Worldwide</p>
      </div>
      <div className="flex flex-col text-center">
        <p className="text-[#252B42] text-[58px] font-bold">100+</p>
        <p className="text-[#737373] font-bold">Top Partners</p>
      </div>
    </div>
  );
};

export default AboutStats;
