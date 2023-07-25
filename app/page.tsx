import CarCard from "@/components/CarCard";
import CustomeFilter from "@/components/CustomeFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    year: searchParams.year,
    fuel: searchParams.fuel,
    limit: searchParams.limit,
    model: searchParams.model,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <div className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 px-6 sm:px-16 py-4 max-w-[1440px] mx-auto"
        id="discover"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like!</p>
        </div>

        <div className=" mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomeFilter title="fuel" options={fuels} />
            <CustomeFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {isDataEmpty ? (
          <>
            <h2>Opps! No results </h2>
          </>
        ) : (
          <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
