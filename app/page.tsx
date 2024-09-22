import { CarCard } from "@/components/CarCard";
import { CustomFilter } from "@/components/CustomFilter";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { ShowMore } from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { Car, Filter } from "@/types";
import { fetchCars } from "@/utils";

interface HomeProps extends Filter {
  limit: number;
}

export default async function Home({
  searchParams,
}: Readonly<{
  searchParams: HomeProps;
}>) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    fuel: searchParams.fuel || "",
    year: searchParams.year || 2024,
    limit: searchParams.limit || 10,
  });

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
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </section>
        </article>

        {allCars?.length > 0 ? (
          <section>
            <article className="home__cars-wrapper">
              {allCars.map((car: Car, index: number) => (
                <CarCard car={car} key={index} />
              ))}
            </article>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <section className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, No Resulst</h2>
          </section>
        )}
      </article>
    </main>
  );
}
