import React from "react";
import Hero from "../Components/Hero";
import { StateContextCustom } from "../Context/StateContext";

const Home = () => {
  const { popular, topRated } = StateContextCustom();
  console.log(topRated);
  return (
    <div>
      <Hero />
      {/* {topRated.map((movie) => (
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      ))} */}
    </div>
  );
};

export default Home;
