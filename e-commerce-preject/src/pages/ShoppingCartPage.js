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
          <div class="border border-gray-200 rounded-lg p-6 max-w-sm mx-auto">
            <h2 class="font-bold text-xl mb-4">Order Summary</h2>
            <div class="flex justify-between items-center mb-4">
              <p class="text-gray-600">Product Cost</p>
              <p class="font-bold text-gray-900">$360.00</p>
            </div>
            <div class="flex justify-between items-center mb-4">
              <p class="text-gray-600">Shipping</p>
              <p class="font-bold text-gray-600">$40.00</p>
            </div>
            <div class="flex justify-between items-center mb-4">
              <p class="text-gray-600">Coupon Code</p>
              <p class="font-bold text-emerald-500">#APPLIED</p>
            </div>
            <div class="flex justify-between items-center">
              <p class="font-bold text-lg">Subtotal</p>
              <p class="font-bold text-indigo-600">$400.00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
