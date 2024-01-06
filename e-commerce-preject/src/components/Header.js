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

  const handleDropdownVisibility = (visible) => {
    setDropdownVisible(visible);
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
              onMouseLeave={() => handleDropdownVisibility(true)}
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
            <Link to="/basket">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <p>1</p>
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
