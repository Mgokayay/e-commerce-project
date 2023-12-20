import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import img from "../../assets/contactimg1.png";

const ContactHeader = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap px-[10%]">
      <div className="flex flex-col justify-center text-center xl:text-start px-[4%]">
        <p className="text-[#252B42] font-bold">CONTACT US</p>
        <h1 className="text-[#252B42] text-[40px] xl:text-[58px] font-bold pt-8">
          Get in touch today!
        </h1>
        <p className="text-[#737373] pt-8">
          We know how large objects will act, but things on a small scale
        </p>
        <p className="text-[#252B42] text-2xl font-bold pt-[36px]">
          Phone ; +451 215 215
        </p>
        <p className="text-[#252B42] text-2xl font-bold pt-[21px]">
          Fax : +451 215 215
        </p>
        <div className="flex items-center gap-4 text-[#252B42] pt-10 justify-center xl:justify-start">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
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
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="flex justify-end pt-16 xl:pt-0">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default ContactHeader;
