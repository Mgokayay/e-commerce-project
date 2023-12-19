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

const Header = () => {
  return (
    <main className="font-bold">
      <header className="h-[58px] px-[3%] xl:flex md:flex hidden xl:flex-wrap md:flex-wrap flex-wrap justify-between bg-[#252B42] text-white">
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

      <nav className="h-[76px] px-[3%] flex bg-white">
        <div className="flex flex-wrap justify-between w-5/12">
          <div className="flex items-center">
            <h2 className="text-[#252B42] text-2xl">Bandage</h2>
          </div>
          <div className="flex flex-wrap gap-12 text-[#737373] items-center justify-center   text-sm">
            <NavLink href="/">Home</NavLink>

            <NavLink href="/productlist">Shop</NavLink>

            <NavLink href="/about-page">About</NavLink>

            <NavLink href="/blog">Blog</NavLink>

            <NavLink href="/contact-page">Contact</NavLink>

            <NavLink href="/pages">Pages</NavLink>
          </div>
        </div>
        <div className="w-3/12"></div>
        <div className="flex flex-wrap gap-8 w-4/12 text-[#23A6F0] items-center justify-end">
          <div className="flex gap-2">
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </Link>

            <Link to="/login">Login</Link>
            <p>/</p>
            <Link to="/signup-page">Register</Link>
          </div>
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
