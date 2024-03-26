import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Reducers&Actions/actions/userAction";
import { renewAxiosInstance } from "../api/api";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    renewAxiosInstance();
    dispatch(deleteUser());
  };
  const categories = useSelector((state) => state.global.categories);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [isDropdownShopping, setIsDropdownShopping] = useState(false);

  const handleDropdownVisibility = (visible) => {
    setTimeout(() => {
      setDropdownVisible(visible);
    }, 500);
  };

  const handleDropdownShopping = () => {
    setIsDropdownShopping(!isDropdownShopping);
    console.log(isDropdownShopping);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleCategoryClick = (category) => {
    setDropdownVisible(false);
    setSelectedGender(null);
  };

  const womenCategories = categories.filter((category) =>
    category.code.startsWith("k:")
  );
  const menCategories = categories.filter((category) =>
    category.code.startsWith("e:")
  );

  const user = useSelector((store) => store.user);
  const shop = useSelector((store) => store.shop);

  let total = shop.cart
    .reduce((total, item) => total + item.product.price * item.count, 0)
    .toFixed(2);
  //ürün bazında toplam fiyat bilgisi ile uğraşmayı dene

  console.log(shop.cart);

  let totalCount = shop.cart.reduce((total, item) => total + item.count, 0);
  console.log(totalCount);

  return (
    <main className="font-bold">
      <header className="h-[58px] px-[3%] hidden flex-wrap justify-between xl:flex bg-[#252B42] text-white">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="flex items-center">
          Follow us and get a chance to win 80% off
        </div>
        <div className="flex items-center gap-4">
          <p>Follow Us</p>
          <p>:</p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </header>

      <nav className="h-[500px] xl:h-[76px] px-[3%] flex bg-white justify-center xl:justify-between">
        <div className="flex flex-wrap justify-start xl:justify-between gap-20 flex-col xl:flex-row ">
          <div className="flex items-center pt-8 xl:pt-0">
            <h2 className="text-[#252B42] text-2xl">Bandage</h2>
          </div>
          <div className="flex flex-wrap gap-4 text-[#737373] text-3xl xl:text-sm flex-col xl:flex-row font-normal xl:font-bold">
            <div className="flex items-center ">
              <NavLink href="/">Home</NavLink>
            </div>
            <div
              className="flex items-center relative"
              onMouseEnter={() => handleDropdownVisibility(true)}
              onMouseLeave={() => handleDropdownVisibility(false)}
            >
              <NavLink href="/productlist">Shop</NavLink>
              {isDropdownVisible && (
                <div className="flex z-50  absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md">
                  <div className="relative cursor-pointer">
                    <div
                      onMouseEnter={() => handleGenderSelect("women")}
                      className={`cursor-pointer py-2 px-4 hover:bg-gray-100 ${
                        selectedGender === "women" && "bg-gray-100"
                      }`}
                    >
                      Women
                      {selectedGender === "women" && (
                        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md">
                          <ul>
                            {womenCategories.map((category) => (
                              <li
                                key={category.id}
                                onClick={() => handleCategoryClick(category)}
                                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                              >
                                {category.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Men */}
                  <div className="relative cursor-pointer">
                    <div
                      onMouseEnter={() => handleGenderSelect("men")}
                      className={`cursor-pointer py-2 px-4 hover:bg-gray-100 ${
                        selectedGender === "men" && "bg-gray-100"
                      }`}
                    >
                      Men
                      {selectedGender === "men" && (
                        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md">
                          <ul>
                            {menCategories.map((category) => (
                              <li
                                key={category.id}
                                onClick={() => handleCategoryClick(category)}
                                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                              >
                                {category.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <NavLink href="/about-page">About</NavLink>
            </div>
            <div className="flex items-center">
              <NavLink href="/blog">Blog</NavLink>
            </div>
            <div className="flex items-center">
              <NavLink href="/contact-page">Contact</NavLink>
            </div>
            <div className="flex items-center">
              <NavLink href="/pages">Pages</NavLink>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-wrap gap-8 text-[#23A6F0] items-center justify-end">
          {user.name ? (
            <div>
              <img src={user.photo} alt="" />
              {user.name}
              <button onClick={handleLogout} className="px-2">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/profile">
                <FontAwesomeIcon icon={faUser} />
              </Link>

              <NavLink href="/login-page">Login</NavLink>
              <p>/</p>
              <NavLink href="/signup-page">Register</NavLink>
            </div>
          )}
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>

          <div className="flex items-center gap-2">
            <button onClick={handleDropdownShopping}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            {isDropdownShopping && (
              <div className="z-10 bg-white absolute top-[15%] right-[6%] w-[250px] h-[340px] border-2 overflow-auto">
                <div className="text-end font-bold py-2 mx-2 border-b-2">
                  <p>Total: ${total}</p>
                </div>
                {shop.cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-around text-sm font-medium"
                  >
                    <div className="">
                      <img src={item.product.images[0].url} className="w-14" />
                    </div>
                    <div className="w-[140px] flex flex-col gap-2">
                      <p className="text-black">{item.product.name}</p>
                      <div className="flex justify-between pr-2">
                        <p className="font-bold">${item.product.price}</p>
                        <div className="flex items-center">
                          <button className="border-2 w-[20px]">-</button>
                          <p className="text-[#737373] border-y-2 w-4 text-center">
                            {item.count}
                          </p>
                          <button className="border-2 w-[20px]">+</button>
                          {/* butonlara onClick vereceğim Shopreducera yeni bir action tanımlayacağız onclick içinde dispatch olacak dispatch action atacak reducerı çalıştıracak bir tane eksiltmek için bir tane de artırmak için case oluştur */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="sticky bottom-0 bg-white py-2 border-t-2">
                  <button className="sticky bottom-0 left-[30%] border-2 px-2 py-[4px] text-sm">
                    <Link to="/shopping-cart-page"> Go to Card </Link>
                  </button>
                </div>
              </div>
            )}

            <p>{totalCount}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/favorites">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <p>1</p>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
