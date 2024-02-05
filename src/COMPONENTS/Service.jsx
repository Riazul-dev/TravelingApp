import React from "react";

const Service = ({ title, description, icon }) => {
  return (
    <div className="flex justify-start items-center gap-6 py-6">
      <div className="flex items-center justify-center">
        <img className="w-20" src={icon} alt="" />
      </div>
      <div>
        <h2 className="text-xl text-slate-900">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default Service;
