"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, style, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={` ${style} py-3 px-6 bg-blue-700 hover:bg-blue-600 text-white rounded-full text-lg font-semibold`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
