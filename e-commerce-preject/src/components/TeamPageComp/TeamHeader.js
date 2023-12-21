import arrow from "../../assets/rightarrow.svg";

const TeamHeader = () => {
  return (
    <div className="flex flex-col items-center ">
      <p className="text-[#737373] font-bold pt-14">WHAT WE DO</p>
      <p className="text-[#252B42] text-[58px] font-bold pt-[12px]">
        Innovation tailored for you
      </p>
      <div className="flex flex-row gap-4 pt-6 pb-16">
        <div className="text-[#252B42] text-sm font-bold">Home</div>
        <img src={arrow} alt="arrow" />
        <div className="text-[#BDBDBD] text-sm font-bold">Shop</div>
      </div>
    </div>
  );
};

export default TeamHeader;
