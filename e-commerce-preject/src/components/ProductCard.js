import svg from "../assets/product-colors.svg";

const ProductCard = () => {
  return (
    <main className="flex flex-col items-center pb-12">
      <h2 className="text-[#252B42] text-base leading-3 font-bold pt-8 pb-4">
        Graphic Design
      </h2>
      <p className="text-[#737373] text-sm font-bold pb-4">
        English Department
      </p>
      <div className="flex gap-2 pb-4">
        <p className="text-[#BDBDBD] text-sm font-bold">$16.48</p>
        <p className="text-[#23856D] text-sm font-bold">$6.48</p>
      </div>
      <img src={svg} alt="svg" className="cursor-pointer" />
    </main>
  );
};

export default ProductCard;
