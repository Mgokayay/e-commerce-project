import svg from "../assets/product-colors.svg";
import best1 from "../assets/bestsellerproduct/best1.png";
import best2 from "../assets/bestsellerproduct/best2.png";
import best3 from "../assets/bestsellerproduct/best3.png";
import best4 from "../assets/bestsellerproduct/best4.png";
import best5 from "../assets/bestsellerproduct/best5.png";
import best6 from "../assets/bestsellerproduct/best6.png";
import best7 from "../assets/bestsellerproduct/best7.png";
import best8 from "../assets/bestsellerproduct/best8.png";
import { NavLink } from "reactstrap";

const BestsellerCard = () => {
  const productImg = [best1, best2, best3, best4, best5, best6, best7, best8];
  return (
    <div className="flex items-center justify-center flex-wrap gap-12 pl-16 ">
      {productImg.map((image, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-110 transition duration-300"
        >
          <NavLink href="/productpage">
            {" "}
            <img src={image} alt={`card ${index}`} />{" "}
          </NavLink>
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
        </div>
      ))}
    </div>
  );
};

export default BestsellerCard;
