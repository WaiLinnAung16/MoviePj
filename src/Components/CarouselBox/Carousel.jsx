import React from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import { StateContextCustom } from "../../Context/StateContext";
import { rem } from "@mantine/core";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "./Carousel.css";

const Carousel = () => {
  const { topRated } = StateContextCustom();
  console.log(topRated);
  return (
    <MantineCarousel
      maw={"100vw"}
      height={700}
      withIndicators
      withControls
      nextControlIcon={<BiChevronRight />}
      previousControlIcon={<BiChevronLeft />}
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          color: "#fff",
          backgroundColor: "#fff !important",
          transition: "width 250ms ease",

          "&[data-active]": {
            width: rem(40),
          },
        },
      }}
    >
      {topRated?.map((movie, i) => {
        return (
          i > 9 && (
            <MantineCarousel.Slide key={movie.id}>
              <div className="bg-gray-900 h-[700px]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                  className="w-full h-full opacity-40 object-cover"
                />
                <div className="absolute bottom-10 left-5 md:left-12 flex flex-col gap-3 text-white w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]">
                  <h1 className=" text-4xl font-extrabold tracking-wider">
                    {movie?.title}
                  </h1>
                  <p>{movie?.overview}</p>
                </div>
              </div>
            </MantineCarousel.Slide>
          )
        );
      })}
    </MantineCarousel>
  );
};

export default Carousel;
