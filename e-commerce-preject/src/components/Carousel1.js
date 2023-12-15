import { Carousel } from "@material-tailwind/react";
import slider1 from "../assets/sliders/slider1.jpg";

export function Carousel1() {
  return (
    <Carousel
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
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
