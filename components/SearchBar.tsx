"use client";
import { useState } from "react";
import { SearchManufacturer } from "./SearchManufacturer";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const onSearch = () => {};

  return (
    <form className="searchbar" onSubmit={onSearch}>
      <fieldset className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </fieldset>
    </form>
  );
};
