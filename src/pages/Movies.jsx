import React, { useState } from "react";
import NowPlaying from "../Components/NowPlaying";
import { StateContextCustom } from "../Context/StateContext";

const Movies = () => {
  window.scrollTo({
    top: 0,
  });
  const { nowPlaying, genre } = StateContextCustom();
  const [id, setId] = useState("0");
  const handleChange = (e) => {
    setId(e.target.value);
  };

  const filter = nowPlaying?.filter((f) => f.genre_ids.includes(Number(id)));
  return (
    <div className="mt-20 py-10 bg-img min-h-screen">
      <div className="flex flex-col items-start gap-5">
        <select
          name="genre"
          id="genre"
          onChange={(e) => handleChange(e)}
          className="pl-5"
        >
          <option value="0">Select one</option>
          {genre?.map((g, index) => {
            return (
              <option value={g?.id} key={index}>
                {g?.name}
              </option>
            );
          })}
        </select>
        <NowPlaying movies={nowPlaying} filter={filter} id={id} />
      </div>
    </div>
  );
};

export default Movies;
