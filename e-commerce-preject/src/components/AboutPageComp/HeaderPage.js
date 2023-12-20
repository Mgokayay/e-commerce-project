import img from "../../assets/about2/aboutbanner.png";

const HeaderPage = () => {
  return (
    <div className="w-[75%] mx-auto flex flex-col justify-start items-start pt-28 gap-10">
      <h3 className="text-slate-800 text-base font-bold leading-normal tracking-tight">
        ABOUT COMPANY
      </h3>
      <h1 className="text-slate-800 text-[#252B42] text-5xl font-bold leading-20 tracking-tight">
        ABOUT US
      </h1>
      <p className="text-neutral-500 text-[#737373] text-xl font-normal leading-7 tracking-tight">
        We know how large objects will act, <br />
        but things on a small scale
      </p>

      <div className="px-7 py-3 bg-[#23A6F0] rounded-5 flex-col items-center gap-3 border-0 border-solid rounded">
        <button className="text-white text-sm font-bold leading-snug tracking-tight">
          Get Quote Now
        </button>
      </div>
      <div className="flex w-[57%] h-full relative">
        <img
          src={img}
          className="absolute bottom-[-10rem] z-40 right-[-32rem]"
        />
      </div>

      <div className="pt-[7rem] gap-8 flex flex-col justify-start items-start">
        <h5 className="text-red-500 text-sm font-normal leading-tight tracking-wider">
          Problems trying
        </h5>
        <div className="flex  justify-between  gap-[6rem]">
          <h2 className="text-slate-800 text-[#252B42] text-2xl font-bold leading-7 tracking-tight">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do{" "}
            <br /> met sent.
          </h2>

          <h5 className="text-neutral-500 text-[#737373] text-sm font-normal leading-tight tracking-wider">
            Problems trying to resolve the conflict between the two major realms
            of <br /> Classical physics: Newtonian mechanics
          </h5>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
