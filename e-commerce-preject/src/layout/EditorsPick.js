import img1 from "../assets/editorspick/filter.png";
import img2 from "../assets/editorspick/filter2.png";
import img3 from "../assets/editorspick/filter3.png";
import img4 from "../assets/editorspick/filter4.png";

const EditorsPick = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center ">
          <h2 className="text-sm font-bold pt-12">EDITOR’S PICK</h2>
          <p className="text-sm font-bold">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex pt-8 gap-4 pb-8">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
          <div className="flex flex-col gap-4">
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorsPick;
