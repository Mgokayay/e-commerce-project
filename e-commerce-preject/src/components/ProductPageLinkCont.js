import arrow from "../assets/rightarrow.svg";

const ProductPageLinkCont = () => {
  return (
    <div className="bg-[#FAFAFA] flex px-[14%] py-6 items-center justify-start flex-col xl:flex-row gap-12 xl:gap-4">
      <p className="text-[#252B42] text-sm font-bold">Home</p>
      <img src={arrow} alt="arrow" />
      <p className="text-[#BDBDBD] text-sm font-bold">Shop</p>
    </div>
  );
};

export default ProductPageLinkCont;
