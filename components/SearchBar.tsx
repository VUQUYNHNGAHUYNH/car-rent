"use client";

import { useState } from "react";
import SearchManufacter from "./SearchManufacter";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="" onSubmit={handleSearch}>
      <SearchManufacter
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    </form>
  );
};

export default SearchBar;
