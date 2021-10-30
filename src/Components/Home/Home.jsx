import React from "react";
import Order from "../Order/Order";
import Gallery from "./Gallery";
import Hero from "./Hero";
import TravelNews from "./TravelNews";

const Home = () => {
  return (
    <div>
      <Hero />
      <Order />
      <TravelNews />
      <Gallery />
    </div>
  );
};

export default Home;
