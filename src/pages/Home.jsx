import React from "react";
import Hero from "../Components/Hero";
import TopRated from "../Components/TopRated";
import NowPlaying from "../Components/NowPlaying";

const Home = () => {
  return (
    <div className="mt-20">
      <Hero />
      <TopRated />
      <NowPlaying />
    </div>
  );
};

export default Home;
