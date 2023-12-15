import { Carousel } from "@material-tailwind/react";
import slider2 from "../assets/sliders/slider2.png";

export function Carousel2() {
  return (
    <Carousel
      className=" bg-[#23856D]  flex relative"
      transition={{ duration: 1 }}
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
