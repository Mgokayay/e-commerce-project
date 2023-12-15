import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#FAFAFA] h-[142px] px-[12%] flex justify-evenly xl:justify-between flex-col xl:flex-row">
        <h2 className="flex items-center text-[#252B42] text-2xl font-bold">
          Bandage
        </h2>
        <div className="flex items-center gap-4 text-[#23A6F0]">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="h-[1071px] xl:h-[272px] px-[12%] flex justify-between pt-14 pb-14 xl:pb-0 flex-col xl:flex-row">
        <div>
          <p className="text-[#252B42] font-bold pb-6">Company Info</p>
          <div>
            <p className="text-[#737373] text-sm font-bold pb-4">About Us</p>
            <p className="text-[#737373] text-sm font-bold pb-4">Carrier</p>
            <p className="text-[#737373] text-sm font-bold pb-4">
              We are hiring
            </p>
            <p className="text-[#737373] text-sm font-bold pb-4">Blog</p>
          </div>
        </div>
        <div>
          <p className="text-[#252B42] font-bold pb-6">Legal</p>
          <div>
            <p className="text-[#737373] text-sm font-bold pb-4">About Us</p>
            <p className="text-[#737373] text-sm font-bold pb-4">Carrier</p>
            <p className="text-[#737373] text-sm font-bold pb-4">
              We are hiring
            </p>
            <p className="text-[#737373] text-sm font-bold pb-4">Blog</p>
          </div>
        </div>
        <div>
          <p className="text-[#252B42] font-bold pb-6">Features</p>
          <div>
            <p className="text-[#737373] text-sm font-bold pb-4">
              Business Marketing
            </p>
            <p className="text-[#737373] text-sm font-bold pb-4">
              User Analytic
            </p>
            <p className="text-[#737373] text-sm font-bold pb-4">Live Chat</p>
            <p className="text-[#737373] text-sm font-bold pb-4">
              Unlimited Support
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#252B42] font-bold pb-6">Resources</p>
          <div>
            <p className="text-[#737373] text-sm font-bold pb-4">
              IOS & Android
            </p>
            <p className="text-[#737373] text-sm font-bold pb-4">
              Watch a Demo
            </p>
            <p className="text-[#737373] text-sm font-bold pb-4">Customers</p>
            <p className="text-[#737373] text-sm font-bold pb-4">API</p>
          </div>
        </div>
        <div>
          <p className="text-[#252B42] font-bold pb-6">Get In Touch</p>
          <div className="flex items-center pb-2">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#EFEFEF] px-[4%] h-[58px] rounded-l-md"
            />
            <button className="bg-[#23A6F0] text-white px-[6%] h-[58px] rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] h-[98px] xl:h-[74px] flex">
        <p className="px-[12%] flex items-center text-[#737373] text-sm font-bold">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
