import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import FeaturedPostsCard from "../components/FeaturedPostsCard";

const FeaturedPosts = () => {
  return (
    <div className="flex flex-col px-[10%] pb-28">
      <div className="flex flex-col items-center pt-28 pb-6">
        <p className="text-[#23A6F0] text-sm font-bold pb-2">Practice Advice</p>
        <h2 className="text-[#252B42] text-[40px] font-bold pb-2">
          Featured Posts
        </h2>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 pt-14">
        <div className="hover:scale-110 transition duration-300">
          <img src={feature1} alt="feature1" />
          <FeaturedPostsCard />
        </div>
        <div className="hover:scale-110 transition duration-300">
          <img src={feature2} alt="feature2" />
          <FeaturedPostsCard />
        </div>
        <div className="hover:scale-110 transition duration-300">
          <img src={feature3} alt="feature3" />
          <FeaturedPostsCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
