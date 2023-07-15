import React from "react";
import Hero from "../Components/Hero";
import TopRated from "../Components/TopRated";
import TvShows from "../Components/TvShows";
import Popular from "../Components/Popular";
import Footer from "../Components/Footer";
import { Container } from "@mantine/core";

const Home = () => {
  return (
    <>
      <div className=" pb-10 bg-img">
        <Hero />
        <div className="container mx-auto">
          <Popular />
          <TopRated />
          <TvShows />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
