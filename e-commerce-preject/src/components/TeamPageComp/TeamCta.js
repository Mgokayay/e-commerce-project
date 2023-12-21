import img1 from "../../assets/trybutton.png";
import img2 from "../../assets/team/tcta1.png";
import img3 from "../../assets/team/tcta2.png";
import img4 from "../../assets/team/tcta3.png";
import img5 from "../../assets/team/tcta4.png";

const TeamCta = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-[90px]">
      <div className="text-[#252B42] text-[40px] font-bold">
        Start your 14 days free trial
      </div>
      <div className="text-[#737373] text-sm pt-6">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </div>
      <div className="pt-8">
        <img
          src={img1}
          alt="img1"
          className="cursor-pointer hover:scale-110 transition duration-200"
        />
      </div>
      <div className="flex gap-4 pt-10">
        <img src={img2} alt="img2" className="cursor-pointer" />
        <img src={img3} alt="img3" className="cursor-pointer" />
        <img src={img4} alt="img4" className="cursor-pointer" />
        <img src={img5} alt="img5" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TeamCta;
