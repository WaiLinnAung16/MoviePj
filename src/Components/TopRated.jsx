import React from "react";
import { StateContextCustom } from "../Context/StateContext";
import MoviesSlide from "./utils/MoviesSlide";

const TopRated = () => {
  const { topRated } = StateContextCustom();
  return <MoviesSlide title="TopRated Movies" data={topRated} />;
};

export default TopRated;
