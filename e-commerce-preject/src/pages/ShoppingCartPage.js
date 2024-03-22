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

  let totalProductPrice = shop.cart
    .reduce((total, item) => total + item.product.price * item.count, 0)
    .toFixed(2);
  const shippingPrice = 40;

  let totalPrice =
    totalProductPrice < 200
      ? parseFloat(totalProductPrice) + shippingPrice
      : totalProductPrice;

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
                    className="border-2 w-[20px]"
                  >
                    -
                  </button>
                  <p className="text-[#737373] border-y-2 w-4 text-center">
                    {item.count}
                  </p>
                  <button
                    onClick={() => handleCountIncrease(item.product)}
                    className="border-2 w-[20px]"
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
        <div className="p-6 border border-gray-200 rounded-3xl  group transition-all duration-500 hover:border-gray-400">
          <div className="p-6">
            <div className="data  border-b border-gray-200">
              <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                Product Cost
              </p>
              <p className="font-medium text-lg leading-8 text-gray-900">
                ${totalProductPrice}
              </p>
            </div>

            <div className="data  border-b border-gray-200">
              <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                Shipping
              </p>
              <p className="font-medium text-lg leading-8 text-gray-900">
                ${totalProductPrice < 200 ? shippingPrice : "0"}
              </p>
            </div>

            <div>
              <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">
                Subtotal
              </p>
              <p className="font-medium text-lg leading-8 text-gray-900">
                ${totalPrice}
              </p>
            </div>
          </div>
          <div>
            <button className="rounded-lg border-2  bg-deep-orange-500 text-white">
              Order Summary
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
