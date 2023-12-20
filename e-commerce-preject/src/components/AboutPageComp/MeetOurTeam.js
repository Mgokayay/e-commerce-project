import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import img1 from "../../assets/about2/team1.png";
import img2 from "../../assets/about2/team2.png";
import img3 from "../../assets/about2/team3.png";

const MeetOurTeam = () => {
  return (
    <div className="flex flex-col items-center text-center pt-[110px] pb-12 xl:pb-[145px] px-[15%] xl:px-0">
      <h2 className="text-[#252B42] text-[40px] font-bold">Meet Our Team</h2>
      <p className="text-[#737373] text-sm pt-[12px]">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>

      <div className="flex items-center justify-center gap-8 pt-8 xl:pt-28 flex-col xl:flex-row ">
        <div className="hover:scale-110 transition duration-300">
          <Link to="/team-page">
            <div>
              <img src={img1} alt="img1" className="cursor-pointer" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <p className="text-[#252B42] font-bold pt-8">Username</p>
            <p className="text-[#737373] text-sm font-bold pt-4">Profession</p>
          </div>
          <div className="flex gap-4 text-[#23A6F0] justify-center pt-[12px]">
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
        <div className="hover:scale-110 transition duration-300">
          <Link to="/team-page">
            <div>
              <img src={img2} alt="img2" className="cursor-pointer" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <p className="text-[#252B42] font-bold pt-8">Username</p>
            <p className="text-[#737373] text-sm font-bold pt-4">Profession</p>
          </div>
          <div className="flex gap-4 text-[#23A6F0] justify-center pt-[12px]">
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
        <div className="hover:scale-110 transition duration-300">
          <Link to="/team-page">
            <div>
              <img src={img3} alt="img3" className="cursor-pointer" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <p className="text-[#252B42] font-bold pt-8">Username</p>
            <p className="text-[#737373] text-sm font-bold pt-4">Profession</p>
          </div>
          <div className="flex gap-4 text-[#23A6F0] justify-center pt-[12px]">
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
      </div>
    </div>
  );
};

export default MeetOurTeam;
