import Client from "../Clients";

const ClientAbout = () => {
  return (
    <div className="flex justify-center py-24 bg-[#FAFAFA]">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-slate-800 text-4xl font-bold text-[#252B42] leading-tight tracking-wider">
          Big Companies Are Here
        </h2>
        <p className="text-center text-neutral-500 text-sm text-[#737373] font-normal leading-tight tracking-wider">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
        <Client />
      </div>
    </div>
  );
};

export default ClientAbout;
