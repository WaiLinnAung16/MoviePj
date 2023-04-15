import React from "react";
import Hero from "../Components/Hero";
import TopRated from "../Components/TopRated";
import TvShows from "../Components/TvShows";
import Popular from "../Components/Popular";

const Home = () => {
  return (
    <div className="mt-20 pb-10 bg-img">
      <Hero />
      <Popular />
      <TopRated />
      <TvShows />
    </div>
  );
};

export default Home;
