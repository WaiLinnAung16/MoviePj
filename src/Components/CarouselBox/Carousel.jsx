import React from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import { StateContextCustom } from "../../Context/StateContext";
import { rem } from "@mantine/core";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "./Carousel.css";

const Carousel = () => {
  const { upComing, genre } = StateContextCustom();
  return (
    <MantineCarousel
      maw={"100vw"}
      height={700}
      mb="lg"
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
      {upComing?.map((movie, i) => {
        return (
          i < 6 && (
            <MantineCarousel.Slide key={movie.id}>
              <div className="bg-gray-900 h-[700px]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                  className="w-full h-full opacity-40 object-cover"
                />
                <div className="absolute bottom-10 left-5 md:left-12 flex flex-col gap-3 text-white w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%]">
                  <h1 className=" text-4xl font-extrabold tracking-wider">
                    {movie?.title}
                  </h1>

                  <div className="flex gap-2">
                    {genre.map(
                      (g) =>
                        movie.genre_ids.map((i) => i).includes(g.id) && (
                          <p
                            className="bg-red-900 rounded-md px-2 text-sm"
                            key={g.id}
                          >
                            {g.name}
                          </p>
                        )
                    )}
                  </div>

                  <p className=" font-bold text-slate-100 tracking-wide">
                    {movie?.overview}
                  </p>
                  <div className="flex items-center gap-3">
                    <button className=" px-8 py-2 bg-red-900 font-bold rounded-sm transition hover:bg-red-700">
                      Watch Trailer
                    </button>
                    <button className=" px-8 py-2 border border-slate-100 text-slate-50 font-bold rounded-sm transition hover:bg-slate-100 hover:text-slate-900">
                      Add to Watchlist
                    </button>
                  </div>
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
