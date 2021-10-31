import React from "react";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Service from "./Service";
import TravelNews from "./TravelNews";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <TravelNews />
      <Gallery />
    </div>
  );
};

export default Home;
