import { useSelector } from "react-redux";
import img1 from "../assets/about/about1.png";
import img2 from "../assets/about/about2.png";
import img3 from "../assets/about/about3.png";
import img4 from "../assets/about/about4.png";
import img5 from "../assets/about/about5.png";
import img6 from "../assets/about/about6.png";
import img7 from "../assets/about/about7.png";
import img8 from "../assets/about/about8.png";

const BestsellerProductAbout = () => {
  const product = useSelector((state) => state.products.productList);
  const aboutImg = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="flex items-center justify-center flex-wrap gap-12 px-28">
      <div className="flex text-[#252B42] font-bold text-2xl ml-24 mt-4 w-full">
        BESTSELLER PRODUCT
      </div>
      {product?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-110 transition duration-300"
        >
          <img
            className="max-w-96 max-h-96"
            src={item?.images?.[0]?.url}
            alt={`card ${index}`}
          />
          <div className="max-w-[250px]">
            <h2 className="text-[#252B42] text-base leading-3 font-bold pt-8 pb-4">
              {item.name}
            </h2>
            <p className="text-[#737373] text-sm font-bold pb-4">
              {item.description}
            </p>
            <div className="flex gap-2 pb-4">
              <p className="text-[#BDBDBD] text-sm font-bold">$16.48</p>
              <p className="text-[#23856D] text-sm font-bold">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestsellerProductAbout;
