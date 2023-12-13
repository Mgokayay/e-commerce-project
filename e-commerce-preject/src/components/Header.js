import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <div className="bg-[#252B42] text-white h-[58px] flex items-center justify-between px-[5%]">
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faPhone} />
            <p className="text-sm font-bold">(225) 555-0118</p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="text-sm font-bold">michelle.rivera@example.com</p>
          </div>
        </div>
        <div>
          <p className=" text-sm font-bold">
            Follow Us and get a chance to win 80% off
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold">Follow Us</p>
          <p className="text-sm font-bold">:</p>

          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <div className="text-black h-[70px] flex items-center justify-around px-[5%]">
        <div className="flex gap-2 w-2/12">
          <h3 className="text-2xl font-bold ">Bandage</h3>
        </div>
        <div className="flex w-10/12 justify-between">
          <div className="flex gap-4">
            <p className=" text-sm font-bold">Home</p>
            <p className=" text-sm font-bold">Shop</p>
            <p className=" text-sm font-bold">About</p>
            <p className=" text-sm font-bold">Blog</p>
            <p className=" text-sm font-bold">Contact</p>
            <p className=" text-sm font-bold">Pages</p>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faUser} />
            <p className="text-sm font-bold">Login</p>
            <p className="text-sm font-bold">/</p>
            <p className="text-sm font-bold">Register</p>

            <FontAwesomeIcon icon={faMagnifyingGlass} />

            <FontAwesomeIcon icon={faCartShopping} />
            <p>1</p>
            <FontAwesomeIcon icon={faHeart} />
            <p>1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
