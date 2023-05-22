import React, { useEffect } from "react";
import TvSlide from "../Components/utils/TvSlide";
import { StateContextCustom } from "../Context/StateContext";
import { Group, Pagination } from "@mantine/core";

const TvShow = () => {
  const { tvShow, setTvPage } = StateContextCustom();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    return setTvPage(1);
  }, []);
  return (
    <div className="mt-24 py-10 bg-img min-h-screen">
      <TvSlide data={tvShow} />
      <Group position="center" mt="lg">
        <Pagination total={10} color="dark" onChange={setTvPage}></Pagination>
      </Group>
    </div>
  );
};

export default TvShow;
