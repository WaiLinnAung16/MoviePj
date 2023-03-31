import { Carousel } from "@mantine/carousel";
import { createStyles, rem } from "@mantine/core";
import React from "react";
import { StateContextCustom } from "../Context/StateContext";

const Hero = () => {
  const { popular } = StateContextCustom();
  return (
    <div>
      <Carousel
        maw={"100vw"}
        height={700}
        withIndicators
        withControls
        styles={{
          indicator: {
            width: rem(12),
            height: rem(4),
            transition: "width 250ms ease",

            "&[data-active]": {
              width: rem(40),
            },
          },
        }}
      >
        {popular?.map((movie) => (
          <Carousel.Slide key={movie.id}>
            <div className="bg-gray-900">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                className="w-full"
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
