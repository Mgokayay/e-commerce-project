import img from "../../assets/about2/aboutus.png";

const AboutWork = () => {
  return (
    <div className="bg-[#2A7CC7] flex py-16 xl:py-0 text-center xl:text-start">
      <div className="flex flex-col justify-center px-[10%] items-center xl:items-start">
        <p className="text-white font-bold">WORK WITH US</p>
        <h2 className="text-white text-[40px] font-bold pt-[20px]">
          Now Let’s grow Yours
        </h2>
        <p className="text-white text-sm pt-[20px]">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <div className="border rounded-lg w-[130px] h-[52px] mt-6 flex items-center justify-center hover:scale-110 cursor-pointer transition duration-300">
          <p className="text-white text-sm font-bold">Button</p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" className="hidden xl:block" />
      </div>
    </div>
  );
};

export default AboutWork;
