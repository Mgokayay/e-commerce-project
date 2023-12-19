import BestsellerCard from "../components/BestsellerCard";

const BestsellerProduct = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-[10px] items-center pt-12">
          <p className="text-sm font-bold text-[#737373]">Featured Products</p>
          <h2 className="text-sm font-bold ">BESTSELLER PRODUCTS</h2>
          <p className="text-sm font-bold text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex pt-8 gap-[30px] w-[80%]  pb-8">
          <div className="flex flex-col items-center">
            <BestsellerCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestsellerProduct;
