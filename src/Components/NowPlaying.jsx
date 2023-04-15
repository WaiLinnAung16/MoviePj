import React from "react";
import { StateContextCustom } from "../Context/StateContext";
import MoviesSlide from "./utils/MoviesSlide";

const NowPlaying = () => {
  const { nowPlaying } = StateContextCustom();
  return <MoviesSlide data={nowPlaying} />;
};

export default NowPlaying;
