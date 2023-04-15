import React from "react";
import NowPlaying from "../Components/NowPlaying";

const Movies = () => {
  window.scrollTo({
    top: 0,
  });
  return (
    <div className="mt-24 py-10 bg-img min-h-screen">
      <NowPlaying />
    </div>
  );
};

export default Movies;
