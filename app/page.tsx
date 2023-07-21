import CustomeFilter from "@/components/CustomeFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

export default function Home() {
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
            <CustomeFilter title="fuel" />
            <CustomeFilter title="year" />
          </div>
        </div>
      </div>
    </div>
  );
}
