import { Carousel, Typography } from "@material-tailwind/react";
import bg from "../assets/sliders/bg-slider2.jpg";

import slider2 from "../assets/sliders/slider2.png";

export function Carousel2() {
  return (
    <Carousel transition={{ duration: 1 }}>
      <div className="relative">
        <img
          src={bg}
          alt="bg"
          className="h-[700px] xl:h-[calc(100vh_-_134px)] w-full object-cover"
        />
        <div className="absolute -top-[180px] xl:top-0 -left-0 xl:-left-[10%] inset-0 grid h-full w-full place-items-center">
          <div className="w-3/5 text-center xl:text-start xl:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-xl font-normal"
            >
              SUMMER 2020
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-[40px] xl:text-[58px]"
            >
              Vita Classic Product
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-base"
            >
              We know how large objects will act, We know how are objects will
              act, We know
            </Typography>
            <div className="flex items-center gap-8">
              <p className="text-white text-2xl font-bold">$16.48</p>
              <div className="bg-[#2DC071] w-[221px] h-[61px] cursor-pointer flex justify-center gap-2 rounded-md hover:scale-110 transition duration-200">
                <p className="flex text-white text-base font-bold items-center">
                  ADD TO CART
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={slider2}
            alt="slider2"
            className="bg-[#23856D] flex xl:absolute top-[28.3%] xl:top-[16.9%] left-[60%]"
          />
        </div>
      </div>
      <div className="relative">
        <img
          src={bg}
          alt="bg"
          className="h-[calc(100vh_-_134px)] w-full object-cover"
        />
        <div className="absolute -left-0 xl:-left-[10%] inset-0 grid h-full w-full place-items-center">
          <div className="w-3/5 text-center xl:text-start xl:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-xl font-normal"
            >
              SUMMER 2020
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-[40px] xl:text-[58px]"
            >
              Vita Classic Product
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-base"
            >
              We know how large objects will act, We know how are objects will
              act, We know
            </Typography>
            <div className="flex items-center gap-8">
              <p className="text-white text-2xl font-bold">$16.48</p>
              <div className="bg-[#2DC071] w-[221px] h-[61px] cursor-pointer flex justify-center gap-2 rounded-md">
                <p className="flex text-white text-base font-bold items-center">
                  ADD TO CART
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={slider2}
            alt="slider2"
            className="absolute top-[17%] left-[60%]"
          />
        </div>
      </div>
    </Carousel>
  );
}
