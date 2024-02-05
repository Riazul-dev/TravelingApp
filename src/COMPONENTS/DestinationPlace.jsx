import React from "react";

const DestinationPlace = ({ title, desc, image, price }) => {
  return (
    <div className="flex justify-center">
      <div className="mx-3 flex flex-col justify-between items-start">
        <div className="md:h-60 md:w-80 lg:w-72">
          <img className="h-full" src={image} alt="image" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl text-slate-800 font-semibold">{title}</h2>
            <p className="text-slate-700">{desc}</p>
          </div>
          <p className="text-xl text-slate-900">From ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationPlace;
