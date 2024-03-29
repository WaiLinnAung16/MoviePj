import React from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import { StateContextCustom } from "../../Context/StateContext";
import { getStylesRef, rem } from "@mantine/core";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
// import "./Carousel.css";
import { useNavigate } from "react-router-dom";
import SlideLoading from "../SlideLoading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMediaQuery } from "@mantine/hooks";
const Carousel = () => {
  const { upComing, genre, loading } = StateContextCustom();
  const nav = useNavigate();
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {loading ? (
        <SlideLoading />
      ) : (
        <MantineCarousel
          maw={"100vw"}
          height={matches ? "100vh" : "750px"}
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
            controls: {
              ref: getStylesRef("controls"),
              transition: "opacity 150ms ease",
              opacity: 0,
            },
            control: {
              width: "50px",
              height: "50px",
              fontSize: "40px",
              backgroundColor: "#fff !important",
            },
            root: {
              "&:hover": {
                [`& .${getStylesRef("controls")}`]: {
                  opacity: 1,
                },
              },
            },
          }}
        >
          {upComing?.map((movie, i) => {
            return (
              i < 6 && (
                <MantineCarousel.Slide key={movie.id}>
                  <div className="h-screen lg:h-[750px] min-[2560px]:h-[900px]">
                    <div className="bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 absolute top-0 w-full h-full z-10"></div>
                    <LazyLoadImage
                      effect="blur"
                      height="100%"
                      width="100%"
                      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-10 left-5 min-[2560px]:left-[540px] flex flex-col gap-3 text-white w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] z-10">
                      <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider">
                        {movie?.title}
                      </h1>

                      <div className="flex gap-2 flex-wrap">
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
                        {movie?.overview?.substring(0, 150)}...
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => nav(`/detail/${movie.id}`)}
                          className="px-8 py-2 border border-slate-100 text-slate-50 font-bold rounded-sm transition active:bg-slate-100 active:text-slate-900"
                        >
                          More Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </MantineCarousel.Slide>
              )
            );
          })}
        </MantineCarousel>
      )}
    </>
  );
};

export default Carousel;
