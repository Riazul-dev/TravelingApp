import React from "react";

const SearchSection = () => {

  const handleSearch = (e)=>{
    e.preventDefault()
  }

  return (
    <div className="bg-gray-100 lg:bg-white/30 py-10 w-full mx-auto flex justify-center items-center lg:-translate-y-[150%]">
      <div className="flex flex-col justify-center items-center text-slate-800 w-full px-2">
        <div>
          <p className="bg-white text-xl px-6 py-2 w-full md:inline-block rounded-t-md">
            Search for your trip
          </p>
        </div>
        <form onSubmit={handleSearch} className="flex lg:flex-row flex-col justify-center gap-4 bg-white py-4 w-full px-2">
          <input
            className="bg-gray-200/60 py-2 px-3 text-slate-800 rounded outline-none border-none w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="bg-gray-200/60 py-2 px-3 text-slate-800 rounded outline-none border-none"
            type="text"
            placeholder="Departure"
          />
          <input
            className="bg-gray-200/60 py-2 px-3 text-slate-800 rounded outline-none border-none"
            type="text"
            placeholder="Arrival"
          />
          <input
            className="bg-gray-200/60 py-2 px-3 text-slate-800 rounded outline-none border-none w-full"
            type="text"
            placeholder="Budget"
          />
          <button
            className="bg-gray-900 p-2 text-white rounded-md"
            type="submit"
          >
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
