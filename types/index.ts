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