import { Carousel } from "@material-tailwind/react";
import slider1 from "../assets/sliders/slider1.jpg";

export function Carousel1() {
  return (
    <Carousel className="rounded-xl">
      <img
        src={slider1}
        alt="slider1"
        className="h-screen w-full object-cover"
      />
      <img
        src={slider1}
        alt="slider1"
        className="h-screen w-full object-cover"
      />
      <img
        src={slider1}
        alt="slider1"
        className="h-screen w-full object-cover"
      />
    </Carousel>
  );
}
