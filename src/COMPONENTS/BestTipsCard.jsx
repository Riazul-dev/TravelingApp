import React from "react";

const BestTipsCard = (item) => {
    const {date, title, titleDesc, desc, image} = item
  return (
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <img
          className="w-full md:w-72"
          src={image}
          alt="image"
        />
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold text-slate-900 flex items-baseline gap-1">
            {date.day} <span className="text-sm text-slate-600 uppercase">{date.month}</span>
          </p>
          <div>
            <h2 className="text-3xl font-semibold text-slate-800">
              {title}
            </h2>
            <p className="text-sm text-slate-700">{titleDesc}</p>
          </div>
          <p className="text-slate-700">
            {desc}
          </p>
        </div>
      </div>
      
  );
};

export default BestTipsCard;
