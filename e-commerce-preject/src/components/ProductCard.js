import { NavLink } from "reactstrap";
import svg from "../assets/product-colors.svg";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Reducers&Actions/actions/shoppingCartAction";

const ProductCard = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);
  let products = productList ? productList : [];

  const handleCart = (product) => {
    dispatch(addToCart(product));
    console.log(product);
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-12">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-110 transition duration-200 "
        >
          <NavLink
            href={`/productpage/${product.id}/${product.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            key={product.id}
          >
            <img
              className="max-w-96 max-h-96"
              src={product?.images?.[0]?.url}
              alt={`card ${index}`}
            />
          </NavLink>
          <div className="max-w-[250px]">
            <h2 className="text-[#252B42] text-base leading-3 font-bold pt-8 pb-4">
              {product.name}
            </h2>
            <p className="text-[#737373] text-sm font-bold pb-4 ">
              {product.description}
            </p>
            <div className="flex gap-2 pb-4">
              <p className="text-[#BDBDBD] text-sm font-bold">$16.48</p>
              <p className="text-[#23856D] text-sm font-bold">
                ${product.price}
              </p>
            </div>
            {/* <img src={svg} alt="svg" className="cursor-pointer" /> */}
            <button onClick={() => handleCart(product)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
