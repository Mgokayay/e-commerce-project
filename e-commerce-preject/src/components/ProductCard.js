import svg from "../assets/product-colors.svg";
// import img1 from "../assets/productlistpage/productlist1.png";
// import img2 from "../assets/productlistpage/productlist2.png";
// import img3 from "../assets/productlistpage/productlist3.png";
// import img4 from "../assets/productlistpage/productlist4.png";
// import img5 from "../assets/productlistpage/productlist5.png";
// import img6 from "../assets/productlistpage/productlist6.png";
// import img7 from "../assets/productlistpage/productlist7.png";
// import img8 from "../assets/productlistpage/productlist8.png";
// import img9 from "../assets/productlistpage/productlist9.png";
// import img10 from "../assets/productlistpage/productlist10.png";
// import img11 from "../assets/productlistpage/productlist11.png";
// import img12 from "../assets/productlistpage/productlist12.png";
import { useSelector } from "react-redux";

const ProductCard = () => {
  const productList = useSelector((state) => state.products.productList);
  const products = productList ? productList : [];

  // const productImg = [
  //   img1,
  //   img2,
  //   img3,
  //   img4,
  //   img5,
  //   img6,
  //   img7,
  //   img8,
  //   img9,
  //   img10,
  //   img11,
  //   img12,
  // ];
  return (
    <div className="flex items-center justify-center flex-wrap gap-12">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col  items-center hover:scale-110 transition duration-300 "
        >
          <img
            className="max-w-96 max-h-96"
            src={product?.images?.[0]?.url}
            alt={`card ${index}`}
          />
          <h2 className="text-[#252B42] text-base leading-3 font-bold pt-8 pb-4">
            {product.name}
          </h2>
          <p className="text-[#737373] text-sm font-bold pb-4">
            {product.description}
          </p>
          <div className="flex gap-2 pb-4">
            <p className="text-[#BDBDBD] text-sm font-bold">$16.48</p>
            <p className="text-[#23856D] text-sm font-bold">{product.price}</p>
          </div>
          <img src={svg} alt="svg" className="cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
