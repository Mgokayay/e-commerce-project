import img1 from "../../assets/team/teamhero1.png";
import img2 from "../../assets/team/teamhero2.png";
import img3 from "../../assets/team/teamhero3.png";
import img4 from "../../assets/team/teamhero4.png";
import img5 from "../../assets/team/teamhero5.png";

const TeamHero = () => {
  return (
    <div className="flex gap-2">
      <img src={img1} alt="img1" className="cursor-pointer" />
      <div className="flex flex-col gap-4">
        <img src={img2} alt="img2" className="cursor-pointer" />
        <img src={img4} alt="img4" className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4">
        <img src={img3} alt="img3" className="cursor-pointer" />
        <img src={img5} alt="img5" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TeamHero;
