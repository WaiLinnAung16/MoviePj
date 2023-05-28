import React from "react";
import { StateContextCustom } from "../Context/StateContext";
import TvSlide from "./utils/TvSlide";
import LoadingGrid from "./LoadingGrid";

const TvShows = () => {
  const { tvShow, loading } = StateContextCustom();
  return (
    <div className="pt-12 flex flex-col items-start gap-5">
      <h1 className="px-4 py-1 bg-slate-900 text-white text-2xl font-bold ml-5 mb-5 relative">
        Tv Show
        <span className="-z-10 after:block after:absolute after:-inset-0 after:border-2 after:border-slate-900 after:translate-x-1 after:translate-y-1"></span>
      </h1>
      {loading ? <LoadingGrid /> : <TvSlide movies={tvShow} />}
    </div>
  );
};

export default TvShows;
