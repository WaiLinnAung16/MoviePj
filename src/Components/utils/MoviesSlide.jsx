import React from "react";
import { Carousel } from "@mantine/carousel";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { rem } from "@mantine/core";
const MoviesSlide = (props) => {
  return (
    <div className="pb-10 flex flex-col items-start gap-5">
      <h1 className="px-4 py-1 bg-slate-900 text-white text-2xl font-bold ml-5 relative">
        {props.title}
        <span className="-z-10 after:block after:absolute after:-inset-0 after:border-2 after:border-slate-900 after:translate-x-1 after:translate-y-1"></span>
      </h1>
      <Carousel
        maw={"100vw"}
        height={400}
        withControls
        slideSize="12%"
        slideGap="md"
        mx="lg"
        align="start"
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
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {props.data?.map((movie) => {
          return (
            <Carousel.Slide key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                className=" h-full w-full "
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MoviesSlide;
