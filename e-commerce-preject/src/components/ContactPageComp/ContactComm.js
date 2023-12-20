import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import submit from "../../assets/submit-button.png";

const ContactComm = () => {
  return (
    <div className="px-[10%] bg-[#FAFAFA] xl:bg-white pt-14 xl:pt-20  xl:pb-0">
      <div className="flex flex-col items-center">
        <p className="text-[#252B42] font-bold">VISIT OUR OFFICE</p>
        <h1 className="flex text-[#252B42] text-[40px] xl:text-[58px] pb-[80px] font-bold pt-8 text-center">
          We help small businesses <br />
          with big ideas
        </h1>
      </div>
      <div className="flex justify-center flex-col xl:flex-row">
        <div className="flex flex-col items-center py-16 w-[328px] bg-white">
          <FontAwesomeIcon
            icon={faPhone}
            className="w-[72px] h-[72px] text-[#23A6F0]"
          />
          <p className="text-[#252B42] text-sm font-bold pt-4">
            georgia.young@example.com
          </p>
          <p className="text-[#252B42] text-sm font-bold pt-2">
            georgia.young@ple.com
          </p>
          <p className="text-[#252B42] font-bold pt-4">Get Support</p>
          <img
            src={submit}
            alt="submit"
            className="pt-4 cursor-pointer hover:scale-110 transition duration-200"
          />
        </div>
        <div className="flex flex-col items-center py-16 w-[328px] bg-[#252B42]">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="w-[72px] h-[72px] text-[#23A6F0]"
          />
          <p className="text-white text-sm font-bold pt-4">
            georgia.young@example.com
          </p>
          <p className="text-white text-sm font-bold pt-2">
            georgia.young@ple.com
          </p>
          <p className="text-white font-bold pt-4">Get Support</p>
          <img
            src={submit}
            alt="submit"
            className="pt-4 cursor-pointer hover:scale-110 transition duration-200"
          />
        </div>
        <div className="flex flex-col items-center py-16 w-[328px] bg-white">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-[72px] h-[72px] text-[#23A6F0]"
          />
          <p className="text-[#252B42] text-sm font-bold pt-4">
            georgia.young@example.com
          </p>
          <p className="text-[#252B42] text-sm font-bold pt-2">
            georgia.young@ple.com
          </p>
          <p className="text-[#252B42] font-bold pt-4">Get Support</p>
          <img
            src={submit}
            alt="submit"
            className="pt-4 cursor-pointer hover:scale-110 transition duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactComm;
