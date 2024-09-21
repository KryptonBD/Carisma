import { CarCard } from "@/components/CarCard";
import { CustomFilter } from "@/components/CustomFilter";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { Car } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();

  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />

      <article className="mt-12 padding-x padding-y max-width" id="discover">
        <section className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Gallery</h1>
          <p>Discover vehicles tailored to your preferences</p>
        </section>

        <article className="home__filters">
          <SearchBar />

          <section className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </section>
        </article>

        {allCars?.length > 0 ? (
          <article className="home__cars-wrapper">
            {allCars.map((car: Car, index: number) => (
              <CarCard car={car} key={index} />
            ))}
          </article>
        ) : (
          <section className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, No Resulst</h2>
          </section>
        )}
      </article>
    </main>
  );
}
