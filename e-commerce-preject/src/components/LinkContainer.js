import arrow from "../assets/rightarrow.svg";

const LinkContainer = () => {
  return (
    <div className="bg-[#FAFAFA] flex px-[10%] py-6 items-center justify-between flex-col xl:flex-row gap-8 xl:gap-0">
      <h2 className="text-[#252B42] text-2xl font-bold">Shop</h2>
      <div className="flex gap-4 justify-center xl:justify-start">
        <p className="text-[#252B42] text-sm font-bold">Home</p>
        <img src={arrow} alt="arrow" />
        <p className="text-[#BDBDBD] text-sm font-bold">Shop</p>
      </div>
    </div>
  );
};

export default LinkContainer;
