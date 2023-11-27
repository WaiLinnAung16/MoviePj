import React from "react";

import MoviesSlide from "./utils/MoviesSlide";
import { AnimatePresence } from "framer-motion";

const NowPlaying = ({ movies, id, filter }) => {
  return (
    <AnimatePresence>
      <MoviesSlide data={id === "0" ? movies : filter} />;
    </AnimatePresence>
  );
};

export default NowPlaying;
