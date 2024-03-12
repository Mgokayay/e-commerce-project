import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addToCart,
  checkedProduct,
  countDecrease,
  removeProduct,
} from "../Reducers&Actions/actions/shoppingCartAction";

const ShoppingCartPage = () => {
  const shop = useSelector((store) => store.shop);
  const dispatch = useDispatch();
  console.log("you are here now", shop.cart);

  const handleCountIncrease = (product) => {
    dispatch(addToCart(product));
  };

  const handleCountDecrease = (product) => {
    dispatch(countDecrease(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const toggleChecked = (product) => {
    dispatch(checkedProduct(product));
  };

  return (
    <>
      <Header />
      <div className="flex justify-evenly bg-[#FAFAFA] py-10">
        <div className="border-2 p-6 bg-white shadow-md">
          {shop.cart.map((item) => (
            <div
              key={item.product.id}
              className="flex border gap-4 w-[600px] px-4 my-4 shadow"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleChecked(item.product)}
              ></input>
              <div className="">
                <img src={item.product.images[0].url} className="w-24" />
              </div>
              <div className="flex items-center justify-between w-[100%]">
                <div className="w-[50%]">
                  <p>{item.product.name}</p>
                </div>

                <div className="w-[] text-center">
                  <p className="">${item.product.price}</p>
                </div>
                <div className="flex">
                  <button
                    onClick={() => handleCountDecrease(item.product)}
                    className=""
                  >
                    -
                  </button>
                  <p className="">{item.count}</p>
                  <button
                    onClick={() => handleCountIncrease(item.product)}
                    className=""
                  >
                    +
                  </button>
                </div>
                <div>
                  <button onClick={() => handleRemoveProduct(item.product)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-2 w-60 h-60 bg-white shadow-md">
          order summary
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
