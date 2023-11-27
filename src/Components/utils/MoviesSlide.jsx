import React from "react";
import { Badge, Title } from "@mantine/core";
import { StateContextCustom } from "../../Context/StateContext";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsPlayCircleFill } from "react-icons/bs";
import {motion} from 'framer-motion'

const MoviesSlide = (props) => {
  const { genre } = StateContextCustom();
  const nav = useNavigate();

  return (
    <motion.div layout className="grid grid-cols-12 gap-8 mx-5 py-3">
      {props.data?.map((movie) => {
        return (
          <motion.div
          animate={{opacity:1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          layout
            key={movie.id}
            className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-2 min-[2550px]:col-span-2 relative flex flex-col gap-1 cursor-pointer group"
            onClick={() => nav(`/detail/${movie.id}`)}
          >
            <Badge
              variant="filled"
              size="lg"
              radius="lg"
              className="absolute -top-3 left-[38%] md:left-[40%] bg-red-900 z-30"
            >
              {Number(movie?.vote_average).toFixed(1)}
            </Badge>
            <div className="rounded overflow-hidden bg-slate-900 relative">
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                className="h-[250px] md:h-[300px] w-full transition-all duration-300 group-hover:scale-110 group-hover:opacity-50"
              />
              <BsPlayCircleFill className="text-4xl text-white opacity-0 transition-all duration-500 group-hover:opacity-100 absolute top-[45%] left-[40%] " />
            </div>
            <Title order={4} className="truncate">
              {movie?.title}
            </Title>
            <div className="flex gap-2 ">
              {genre.map(
                (g) =>
                  movie?.genre_ids
                    .filter((m, i) => i < 2 && m)
                    .includes(g.id) && (
                    <p
                      className="text-sm font-semibold text-slate-500"
                      key={g.id}
                    >
                      {g.name}
                    </p>
                  )
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default MoviesSlide;
