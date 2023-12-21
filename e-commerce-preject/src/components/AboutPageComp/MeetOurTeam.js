import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { NavLink } from "reactstrap";
import img1 from "../../assets/about2/team1.png";
import img2 from "../../assets/about2/team2.png";
import img3 from "../../assets/about2/team3.png";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      username: "Username1",
      profession: "Profession1",
      image: img1,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 2,
      username: "Username2",
      profession: "Profession2",
      image: img2,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 3,
      username: "Username3",
      profession: "Profession3",
      image: img3,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
  ];
  return (
    <div className="flex flex-col items-center text-center pt-[110px] pb-12 xl:pb-[145px] px-[15%] xl:px-0">
      <h2 className="text-[#252B42] text-[40px] font-bold">Meet Our Team</h2>
      <p className="text-[#737373] text-sm pt-[12px]">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>

      <div className="flex items-center justify-center gap-8 pt-8 xl:pt-28 flex-col xl:flex-row ">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="hover:scale-110 transition duration-300"
          >
            <NavLink href="/team-page">
              <div>
                <img
                  src={member.image}
                  alt={`img${member.id}`}
                  className="cursor-pointer"
                />
              </div>
            </NavLink>
            <div className="flex flex-col items-center">
              <p className="text-[#252B42] font-bold pt-8">{member.username}</p>
              <p className="text-[#737373] text-sm font-bold pt-4">
                {member.profession}
              </p>
            </div>
            <div className="flex gap-4 text-[#23A6F0] justify-center pt-[12px]">
              <a
                href={member.socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href={member.socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={member.socialMediaLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
