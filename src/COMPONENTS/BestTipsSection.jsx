import React from "react";
import { bestTips } from "../Data";
import BestTipsCard from "./BestTipsCard";

function BestTripSection() {
  return (
    <div className="w-[86vw] m-auto grid xl:grid-cols-3 gap-10 py-8">
      <div className="flex flex-col gap-10 xl:col-span-2">
        {bestTips.map((item) => (
          <BestTipsCard key={item.id} {...item} />
        ))}
      </div>

      <div className="xl:col-span-1 h-full relative overflow-hidden">
        <img
          className="h-full m-auto w-full"
          src="https://images.unsplash.com/photo-1604140971585-3616fc2b97e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG9mZmVyfGVufDB8fDB8fHww"
          alt=""
        />

        <div className="text-center text-white bg-pink-600/80 absolute bottom-0 left-0 w-full py-4 md:py-14">
          <p className="text-3xl font-semibold">Get a 20%</p>
          <p className="text-3xl font-semibold">Discount</p>
          <p className="text-xl">Buy Your Vacation Online Now</p>
        </div>
      </div>
    </div>
  );
}

export default BestTripSection;
