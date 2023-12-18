import React from "react";
import { Button } from "@material-tailwind/react";

function Slide(props) {
  const slideContentWidth = props.w === "2/3" ? "slider-2_3" : "slider-1_2";

  return (
    <div
      style={{
        backgroundImage: "url(" + props.source + ")",
      }}
      className="flex justify-center items-center bg-cover"
    >
      <div className="container mt-12 mb-4">
        <div
          className={`flex gap-9 flex-col items-start py-12 my-28 ${slideContentWidth}`}
        >
          <div className="text-xs">{props.season}</div>
          <div className="text-4xl font-bold">NEW COLLECTION</div>
          <div className="text-lg w-2/3 tracking-widest">
            We know how large objects will act,but things on a small scale.
          </div>
          <Button color="teal">SHOP NOW</Button>
        </div>
      </div>
    </div>
  );
}

export default Slide;
