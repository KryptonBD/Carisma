"use client";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

export const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredManufacturer =
    searchQuery.trim() === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        ) || [];

  return (
    <section className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-3.5">
            <Image
              src="/car-logo.svg"
              alt="Car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearchQuery("")}
          >
            <ComboboxOptions>
              {filteredManufacturer.length > 0 &&
                filteredManufacturer.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ focus }) =>
                      `relative search-manufacturer__option ${
                        focus ? "bg-primary-red text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {item}
                  </ComboboxOption>
                ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </section>
  );
};
