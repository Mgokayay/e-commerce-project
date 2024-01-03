import React from "react";
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
import { useSelector } from "react-redux";

const Header = () => {
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
            <div className="flex items-center ">
              <NavLink href="/productlist">Shop</NavLink>
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
              <img src={user.photo} />
              {user.name}
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
