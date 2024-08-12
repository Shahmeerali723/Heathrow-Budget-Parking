import React from "react";
import HeroBack from "@/assets/hero.gif";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative w-full -z-10">
      <Image height={200} src={HeroBack} width={100} className="w-full" alt="Hero Background" />
      <div className="absolute inset-y-0 left-0 flex  max-[1228px]:py-[50px] max-[369px]:py-[20px]    w-full bg-gradient-hero">
        <div className="container min-[1228px]:mt-[165px] ">
          <div className="text-left w-full md:w-[70%] lg:w-[50%] flex flex-col gap-3">
            <h1 className="text-sm sm:text-2xl md:text-4xl lg:text-6xl text-white font-plus-jakarta font-extrabold">
              Go Wherever, Whenever
            </h1>
            <p className="text-xs sm:text-lg text-white font-plus-jakarta">
              Cabbx is the all-in-one mobility app. Get picked up by a top-rated driver in minutes and enjoy a comfortable ride to wherever you’re going;
            </p>
            {/* <Button className="bg-primary text-white w-fit p-1 px-5 text-xs sm:tetx-lg">Read More</Button> */}
          </div>
        </div>
      </div>
      <Image className="absolute sm:bottom-0 bottom-[-24px] w-full   "  src={"/her.svg"} alt="" width={100} height={100}/>
    </div>
  );
};

export default Hero;
