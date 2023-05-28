import React, { useEffect } from "react";
import TvSlide from "../Components/utils/TvSlide";
import { StateContextCustom } from "../Context/StateContext";
import { Group, Pagination, Flex } from "@mantine/core";
import { useState } from "react";
import { TbMoodSadSquint } from "react-icons/tb";

const TvShow = () => {
  const { tvShow, setTvPage, genre } = StateContextCustom();
  const [id, setId] = useState("0");
  const handleChange = (e) => {
    setId(e.target.value);
  };

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const filter = tvShow?.filter((f) => f.genre_ids.includes(Number(id)));

  useEffect(() => {
    return setTvPage(1);
  }, []);
  return (
    <div className="mt-16 py-10 bg-img min-h-screen">
      <div className="flex justify-between gap-2 mx-5 mb-5">
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
      <TvSlide movies={id === "0" ? tvShow : filter} />
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
      <Group position="center" mt="lg">
        <Pagination total={10} color="dark" onChange={setTvPage}></Pagination>
      </Group>
    </div>
  );
};

export default TvShow;
