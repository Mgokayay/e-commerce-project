import best1 from "../assets/bestsellerproduct/best1.png";
import best2 from "../assets/bestsellerproduct/best2.png";
import best3 from "../assets/bestsellerproduct/best3.png";
import best4 from "../assets/bestsellerproduct/best4.png";
import best5 from "../assets/bestsellerproduct/best5.png";
import best6 from "../assets/bestsellerproduct/best6.png";
import best7 from "../assets/bestsellerproduct/best7.png";
import best8 from "../assets/bestsellerproduct/best8.png";

import ProductCard from "../components/ProductCard";

const BestsellerProduct = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-[10px] items-center pt-12">
            <p className="text-sm font-bold text-[#737373]">
              Featured Products
            </p>
            <h2 className="text-sm font-bold ">BESTSELLER PRODUCTS</h2>
            <p className="text-sm font-bold text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="flex pt-8 gap-[30px] w-[1049px]  pb-8">
            <div className="flex flex-col items-center">
              <img src={best1} alt="best1" />
              <ProductCard />
            </div>
            <div className="flex flex-col items-center">
              <img src={best2} alt="best2" />
              <ProductCard />
            </div>
            <div className="flex flex-col items-center">
              <img src={best3} alt="best3" />
              <ProductCard />
            </div>
            <div className="flex flex-col items-center">
              <img src={best4} alt="best4" />
              <ProductCard />
            </div>
          </div>
          <div className="flex pt-8 gap-[30px] w-[1049px] pb-8">
            <div className="flex flex-col items-center">
              <img src={best5} alt="best5" />
              <ProductCard />
            </div>
            <div className="flex flex-col items-center">
              <img src={best6} alt="best6" />
              <ProductCard />
            </div>
            <div className="flex flex-col items-center">
              <img src={best7} alt="best7" />
              <ProductCard />
            </div>
            <div className="flex flex-col items-center">
              <img src={best8} alt="best8" />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestsellerProduct;
