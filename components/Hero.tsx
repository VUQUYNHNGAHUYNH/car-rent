"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex flex-col lg:flex-row gap-5 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 px-6 sm:px-16">
        <h1 className="text-5xl font-bold md:text-6xl 2xl:text-7xl ">
          Find, book, or rent a car!
        </h1>
        <p className="text-xl 2xl:text-2xl mt-4">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore cars"
          style="mt-10 rounded-full"
          handleClick={handleScroll}
        />
      </div>
      <div className="flex-[1.5] flex justify-center items-center w-full lg:h-screen">
        <div className="relative w-full lg:h-ful h-[600px] z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="absolute lg:-top-20 lg:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full lg:h-screen h-[600px] overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
