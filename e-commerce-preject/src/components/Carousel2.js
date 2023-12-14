import { Carousel } from "@material-tailwind/react";
import slider2 from "../assets/sliders/slider2.png";

export function Carousel2() {
  return (
    <Carousel
      className="bg-[#23856D]  flex relative"
      transition={{ duration: 1 }}
    >
      <img
        src={slider2}
        alt="slider2"
        className="h-[685px] w-[443px] object-cover absolute left-[60%] "
      />

      <img
        src={slider2}
        alt="slider2"
        className="h-[685px] w-[443px] object-cover "
      />
    </Carousel>
  );
}
