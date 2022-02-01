import { HiSearch } from "react-icons/hi";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-128 bg-indigo-100">
      <label htmlFor="address">
        <h1 className="text-4xl">What is your address?</h1>
      </label>
      <div className="flex items-center h-12 w-96 border-2 rounded-md bg-white">
        <div className="px-3">
          <HiSearch color="#a8a29e" className="w-6 h-6" />
        </div>
        <input
          id="address"
          className="h-full w-full outline-0 focus:ring ring-blue-500"
        />
      </div>
    </div>
  );
};
