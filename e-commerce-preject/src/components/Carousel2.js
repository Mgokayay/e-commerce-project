import { Carousel } from "@material-tailwind/react";
import slider2 from "../assets/sliders/slider2.png";

export function Carousel2() {
  return (
    <Carousel transition={{ duration: 2 }}>
      <img
        src={slider2}
        alt="slider2"
        className="h-[calc(100vh_-_134px)] w-full object-cover"
      />

      <img
        src={slider2}
        alt="slider2"
        className="h-[calc(100vh_-_134px)] w-full object-cover"
      />
    </Carousel>
  );
}
