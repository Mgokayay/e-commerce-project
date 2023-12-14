import img from "../assets/hero-cover-1.png";
import img2 from "../assets/button-buy.png";
import img3 from "../assets/button-read.png";

const ProductsInfo = () => {
  return (
    <div className="flex justify-center">
      <div>
        <img src={img} alt="img" className="" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <p className="text-[#BDBDBD] font-bold pb-8">SUMMER 2020</p>
          <h2 className="text-[#252B42] text-[40px] font-bold pb-8">
            Part of the Neural Universe
          </h2>
          <p className="flex flex-wrap text-[#737373] text-xl pb-6">
            We know how large objects will act, but things on a small scale.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex gap-2">
            <img
              src={img2}
              alt="img2"
              className="cursor-pointer hover:scale-110 hover:drop-shadow-lg transition duration-300"
            />
            <img
              src={img3}
              alt="img3"
              className="cursor-pointer hover:scale-110 hover:drop-shadow-lg transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
