import React from "react";
import DestinationPlace from "./DestinationPlace";
import { destinations } from "../Data";


const Destination = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col justify-center gap-4">
        <p className="text-slate-700 text-xs tracking-widest text-center">
          SIMPLY AMAZING PLACES
        </p>
        <h2 className="text-4xl text-slate-900 font-semibold tracking-wider text-center">
          Popular Destinations
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 md:w-[86vw] mx-auto">
        {destinations.map((destination)=>(
            <DestinationPlace key={destination.id} {...destination} />
        ))}
      </div>
    </div>
  );
};

export default Destination;
