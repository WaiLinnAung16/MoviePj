import React from "react";
import TvShows from "../Components/TvShows";
import TvSlide from "../Components/utils/TvSlide";
import { StateContextCustom } from "../Context/StateContext";

const TvShow = () => {
  const { tvShow } = StateContextCustom();
  window.scrollTo({
    top: 0,
  });
  return (
    <div className="mt-24 py-10 bg-img min-h-screen">
      <TvSlide data={tvShow} />
    </div>
  );
};

export default TvShow;
