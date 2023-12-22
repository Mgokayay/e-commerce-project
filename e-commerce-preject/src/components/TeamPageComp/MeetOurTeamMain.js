import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import img1 from "../../assets/team/team1.png";
import img2 from "../../assets/team/team2.jpg";
import img3 from "../../assets/team/team3.png";
import img4 from "../../assets/team/team4.png";
import img5 from "../../assets/team/team5.jpg";
import img6 from "../../assets/team/team6.png";
import img7 from "../../assets/team/team7.png";
import img8 from "../../assets/team/team8.jpg";
import img9 from "../../assets/team/team9.png";

const MeetOurTeamMain = () => {
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
    {
      id: 4,
      username: "Username4",
      profession: "Profession4",
      image: img4,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 5,
      username: "Username5",
      profession: "Profession5",
      image: img5,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 6,
      username: "Username6",
      profession: "Profession6",
      image: img6,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 7,
      username: "Username7",
      profession: "Profession7",
      image: img7,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 8,
      username: "Username8",
      profession: "Profession8",
      image: img8,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      id: 9,
      username: "Username9",
      profession: "Profession9",
      image: img9,
      socialMediaLinks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
      },
    },
  ];
  return (
    <div className="flex flex-col items-center pt-28 pb-[137px]">
      <h1 className="text-[#252B42] text-[40px] font-bold">Meet Our Team</h1>
      <div className="flex justify-center flex-wrap px-[10%] gap-x-6 gap-y-12">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="hover:scale-110 items-center justify-center transition duration-100"
          >
            <Link to="/team-page">
              <div>
                <img
                  src={member.image}
                  alt={`img${member.id}`}
                  className="cursor-pointer"
                />
              </div>
            </Link>
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

export default MeetOurTeamMain;
