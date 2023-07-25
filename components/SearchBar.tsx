"use client";

import { useState } from "react";
import SearchManufacter from "./SearchManufacter";
import { AiFillCar, AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/hero.png"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center">
        <SearchManufacter
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <button>
          <AiOutlineSearch
            type="submit"
            size={20}
            className="sm:hidden text-gray-700 cursor-pointer"
          />
        </button>
      </div>
      <div className="flex-1 max-sm:w-full  flex justify-start items-center">
        <AiFillCar size={20} className="mr-3 text-gray-500" />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full h-[48px] pl-2 p-4 rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <button>
          <AiOutlineSearch
            type="submit"
            size={20}
            className="sm:hidden text-gray-700 cursor-pointer"
          />
        </button>
      </div>
      <button>
        <AiOutlineSearch
          type="submit"
          size={20}
          className="max-sm:hidden text-gray-700 cursor-pointer"
        />
      </button>
    </form>
  );
};

export default SearchBar;
