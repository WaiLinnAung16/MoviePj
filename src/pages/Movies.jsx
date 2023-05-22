import React, { useEffect, useState } from "react";
import NowPlaying from "../Components/NowPlaying";
import { StateContextCustom } from "../Context/StateContext";
import { Flex, Group, Pagination } from "@mantine/core";
import SlideLoading from "../Components/SlideLoading";

const Movies = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const { nowPlaying, genre, setPage, loading } = StateContextCustom();
  const [id, setId] = useState("0");
  const handleChange = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    return setPage(1);
  }, []);

  const filter = nowPlaying?.filter((f) => f.genre_ids.includes(Number(id)));

  return (
    <div className="mt-16 py-10 bg-img min-h-screen">
      <div className="flex  gap-2 mx-5 mb-8">
        <label htmlFor="genre" className="text-xl font-bold">
          Categories
        </label>
        <select
          name="genre"
          id="genre"
          onChange={(e) => handleChange(e)}
          className="custom-selector"
        >
          <option value="0">All</option>
          {genre?.map((g, index) => {
            return (
              <option value={g?.id} key={index} className="custom-option">
                {g?.name}
              </option>
            );
          })}
        </select>
      </div>

      <NowPlaying movies={nowPlaying} filter={filter} id={id} />

      <>
        <Pagination
          total={10}
          color="dark"
          onChange={setPage}
          className="w-full mt-5 flex justify-center"
        ></Pagination>
      </>
    </div>
  );
};

export default Movies;
