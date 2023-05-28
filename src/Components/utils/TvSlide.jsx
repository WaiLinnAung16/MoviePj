import React from "react";
import { Badge, Title } from "@mantine/core";
import { StateContextCustom } from "../../Context/StateContext";
import { useNavigate } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
const TvSlide = ({ movies }) => {
  const { genre } = StateContextCustom();
  const nav = useNavigate();

  return (
    <div className="grid grid-cols-12 gap-8 mx-5 py-3">
      {movies?.map((movie) => {
        return (
          <div
            key={movie.id}
            className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2 relative flex flex-col gap-1 cursor-pointer group"
            onClick={() => nav(`/tvShow/${movie.id}`)}
          >
            <Badge
              variant="filled"
              size="lg"
              radius="lg"
              className="absolute -top-3 left-[38%] md:left-[40%] bg-red-900 z-30"
            >
              {movie?.vote_average}
            </Badge>
            <div className="rounded overflow-hidden bg-slate-900 relative">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                className="h-[250px] md:h-[300px] w-full transition-all group-hover:scale-110 group-hover:opacity-50"
              />
              <BsPlayCircleFill className="text-4xl text-white opacity-0 transition-all duration-500 group-hover:opacity-100 absolute top-[45%] left-[40%] " />
            </div>
            <Title order={4} className="truncate">
              {movie?.name}
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
          </div>
        );
      })}
    </div>
  );
};

export default TvSlide;

{
  /* <img
  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
  className=" h-full w-full "
/> */
}
