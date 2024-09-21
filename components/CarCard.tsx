"use client";
import { Car } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CustomButton } from "./CustomButton";
import { CarDetails } from "./CarDetails";

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="car-card group">
      <section className="car-card__content">
        <h2 className="car-card__content--title">
          {car.make} {car.model}
        </h2>
      </section>
      <p className="flex mt-6 text-xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {carRent}
        <span className="self-end text-sm font-medium">/day</span>
      </p>
      <picture className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt={"Car " + car.model}
          className="object-contain"
          fill
          priority
        />
      </picture>

      <article className="relative w-full mt-2">
        <section className="car-card__icon-container">
          <figure className="car-card__icon">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Transmission type icon"
            />
            <figcaption className="car-card__icon-text">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </figcaption>
          </figure>

          <figure className="car-card__icon">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="Drive type icon"
            />
            <figcaption className="car-card__icon-text">
              {car.drive.toUpperCase()}
            </figcaption>
          </figure>

          <figure className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="Mileage icon" />
            <figcaption className="car-card__icon-text">
              {car.city_mpg} MPG
            </figcaption>
          </figure>
        </section>

        <p className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-4 rounded-full bg-primary-red"
            textStyles="text-white text-base font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </p>
      </article>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </article>
  );
};
