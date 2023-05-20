import React from "react";

import MoviesSlide from "./utils/MoviesSlide";

const NowPlaying = ({ movies, id, filter }) => {
  return <MoviesSlide data={id === "0" ? movies : filter} />;
};

export default NowPlaying;
