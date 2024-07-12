import React from "react";
import HeroBack from "@/assets/HeroBackground.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div>

    <div className="relative w-full rounded-b-full -z-10">
      <Image height={200} src={HeroBack} width={100} className="w-full sm:rounded-b-[80px]" alt="Hero Background" />
      <div className="absolute inset-y-0 left-0 flex items-center   w-full bg-gradient-hero rounded-b-[80px]">
        <div className="container">

        <div className="text-left w-full md:w-[70%] lg:w-[60%]    flex flex-col gap-3">
          <h1 className="text-sm sm:text-2xl md:text-4xl lg:text-6xl text-white font-plus-jakarta font-extrabold">
            Go Wherever,
            Whenever
          </h1>
          <p className=" text-xs sm:text-lg text-white font-plus-jakarta">
            Cabbx is the all-in-one mobility app. Get picked up by a
            top-rated driver in minutes and enjoy a comfortable ride to
            wherever you’re going;
          </p>
          <Button className="bg-primary text-white w-fit p-1  text-xs sm:tetx-lg">Read More</Button>
        </div>
        </div>
      </div>
    </div>
    
    
    </div>
  );
};

export default Hero;
