import { HiSearch } from "react-icons/hi";

export const Hero = () => {
  return (
    <div className="h-screen bg-indigo-100">
      <div className="flex flex-col gap-6 items-center pt-60">
        <h1 className="text-4xl">Rate a Rental</h1>
        <p className="text-xl">Discover and review rental properties</p>
        <div className="relative flex items-center h-12 w-96 border-2 rounded-md bg-white">
          <label htmlFor="address" className="absolute px-3">
            <HiSearch aria-hidden color="#a8a29e" className="w-6 h-6" />
            <span className="sr-only">Search for an address</span>
          </label>
          <input
            id="address"
            className="h-full w-full pl-12 rounded-md outline-0 focus:ring ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
