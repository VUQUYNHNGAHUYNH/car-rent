"use client";

import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import CardDetail from "./CardDetail";
import CustomButton from "./CustomButton";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group flex flex-col p-6 justify-center items-start text-black-50 bg-sky-50 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="flex w-full justify-between items-start gap-2">
        <div className="text-xl font-bold  capitalize">
          {make} {model}
        </div>
      </div>

      <p className="flex mt-6 text-[36px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3">
        <Image
          src="/hero.png"
          fill
          priority
          alt="car model"
          className="object-contain"
        />
      </div>

      <div className=" relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-700">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[13px] leading-4">
              {transmission === "a" ? "Atomatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[13px] leading-4">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[13px] leading-4">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            title="View More"
            style="text-blue-500 py-[4px] w-full"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CardDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
