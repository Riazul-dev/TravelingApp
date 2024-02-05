import React from "react";
import HeroSection from "../COMPONENTS/HeroSection";
import SearchSection from "../COMPONENTS/SearchSection";
import ServiceSection from "../COMPONENTS/ServiceSection";
import Destination from "../COMPONENTS/Destination";
import BestTripSection from "../COMPONENTS/BestTipsSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <SearchSection />
      <ServiceSection />
      <Destination />
      <BestTripSection />
      
    </div>
  );
}

export default Home;
