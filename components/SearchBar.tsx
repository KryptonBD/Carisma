"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!manufacturer.trim() && !model.trim()) {
      return alert("Please Enter a manufacturer or model");
    }

    updateSearchParams();
  };

  const updateSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model.toLowerCase());
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer.toLowerCase());
    } else {
      searchParams.delete("manufacturer");
    }

    const newPath = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPath, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={onSearch}>
      <fieldset className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton additionalClasses="sm:hidden" />
      </fieldset>
      <fieldset className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Car model"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4"
        />
        <input
          type="text"
          className="searchbar__input"
          name="model"
          placeholder="golf"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton additionalClasses="sm:hidden" />
      </fieldset>
      <SearchButton additionalClasses="max-sm:hidden" />
    </form>
  );
};

const SearchButton = ({
  additionalClasses,
}: {
  additionalClasses?: string;
}) => {
  return (
    <button
      type="submit"
      className={`-mt-2 z-10 ${additionalClasses}`}
      aria-label="Search"
    >
      <Image
        src="/magnifying-glass.svg"
        alt="Search Icon"
        width={40}
        height={40}
      />
    </button>
  );
};
