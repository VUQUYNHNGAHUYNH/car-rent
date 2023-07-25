import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    style: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}

export interface SearchManufactersProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }


  export interface FilterProps {
    manufacturer: string;
    year: number;
    limit: number;
    fuel: string;
    model: string;
  }

  export interface OptionsProps {
title: string;
value: string;
  }

  export interface CustomProps {
    title: string;
    options: OptionsProps[]
  }