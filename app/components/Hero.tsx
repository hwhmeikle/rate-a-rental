import { HiSearch } from "react-icons/hi";

export const Hero = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-6 items-center pt-48">
        <h1 className="text-4xl">Rate a Rental</h1>
        <p className="text-xl">Discover and review rental properties</p>

        <form role="search" className="flex items-center h-14 w-128">
          <label className="sr-only" htmlFor="address-search">
            Search for rental property reviews:
          </label>
          <input
            id="address-search"
            name="address-search"
            type="text"
            className="h-full w-full px-6 text-lg border-l-2 border-y-2 rounded-l-lg"
          />
          <button className="flex justify-center items-center px-4 h-full bg-lime-700 rounded-r-lg">
            <HiSearch aria-hidden color="white" className="w-8 h-8" />
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};
