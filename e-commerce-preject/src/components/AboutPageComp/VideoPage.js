import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import img from "../../assets/about2/video.png";

const VideoPage = () => {
  return (
    <div className="w-[60%] mx-auto py-6 flex items-center">
      <div className="relative rounded-2xl overflow-hidden ">
        <img src={img} />
        <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faCirclePlay}
            className=" text-7xl text-white rounded-full bg-[#23A6F0]"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
