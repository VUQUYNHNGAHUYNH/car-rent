"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import { Listbox } from "@headlessui/react";
import { CustomProps } from "@/types";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const CustomeFilter = ({ title, options }: CustomProps) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="relative w-full min-w-[100px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
            <span className="block truncate">{selected.title}</span>
            <AiFillCaretDown size={20} className="text-gray-500" />
          </Listbox.Button>

          <Listbox.Options className="absolute w-full rounded-md focus:outline-none bg-white py-1 text-base sm:text-sm shadow-md">
            {options.map((option) => (
              <Listbox.Option
                key={option.title}
                value={option}
                className={({ active }) =>
                  `relative cursor-default select-none py-1 px-4 ${
                    active
                      ? "bg-blue-500 text-white rounded-sm"
                      : "text-gray-700"
                  }`
                }
              >
                <span>{option.title}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomeFilter;
