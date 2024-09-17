"use client";
import Image from "next/image";
import { CustomButton } from "./CustomButton";

export const Hero = () => {
  const handleScroll = () => {};

  return (
    <article className="hero">
      <section className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Carisma: Your Ride, Your Way</h1>
        <p className="hero__subtitle">
          Elevate your ride with a seamless booking experience—effortless, fast,
          and tailored to you.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-red text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </section>
      <section className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="A Car" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </section>
    </article>
  );
};
