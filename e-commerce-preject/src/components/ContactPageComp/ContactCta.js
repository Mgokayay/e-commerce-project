import arrow from "../../assets/downarrow.png";
import img from "../../assets/trybutton.png";

const ContactCta = () => {
  return (
    <div className="flex flex-col items-center pt-[76px] pb-[68px]">
      <img src={arrow} alt="arrow" />
      <p className="text-[#252B42] font-bold pt-4">WE Can't WAIT TO MEET YOU</p>
      <p className="text-[#252B42] text-[58px] font-bold pt-2">Let’s Talk</p>
      <img
        src={img}
        alt="img"
        className="pt-2 cursor-pointer hover:scale-110 transition duration-150"
      />
    </div>
  );
};

export default ContactCta;
