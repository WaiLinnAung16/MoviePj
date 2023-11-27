import React, { useEffect, useState } from "react";
import NowPlaying from "../Components/NowPlaying";
import { StateContextCustom } from "../Context/StateContext";
import { Flex, Group, Pagination, Title } from "@mantine/core";
import SlideLoading from "../Components/SlideLoading";
import { TbMoodSadSquint } from "react-icons/tb";
const Movies = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const { nowPlaying, genre, setPage } = StateContextCustom();
  const [id, setId] = useState("0");
  const handleChange = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    return setPage(1);
  }, []);

  const filter = nowPlaying?.filter((f) => f.genre_ids.includes(Number(id)));

  return (
    <div className="py-10 bg-img min-h-screen relative container mx-auto">
      <div className="flex justify-between gap-2 mx-5 mb-5 mt-14">
        <label htmlFor="genre" className="text-2xl font-bold">
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
      {id === "0" ||
        (filter?.length === 0 && (
          <Flex
            justify="center"
            align="center"
            direction="column"
            gap="md"
            h="70vh"
            mx="lg"
            mb="lg"
          >
            <TbMoodSadSquint className="text-slate-900 text-5xl" />
            <h1 className="text-4xl font-bold text-center">
              Sorry, There's no movie to show.
            </h1>
          </Flex>
        ))}

      <Pagination
        total={10}
        color="dark"
        onChange={setPage}
        className="w-full mt-5 flex justify-center "
      ></Pagination>
    </div>
  );
};

export default Movies;
