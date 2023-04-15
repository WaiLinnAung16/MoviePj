import React from "react";
import { Badge, Title } from "@mantine/core";
import { StateContextCustom } from "../../Context/StateContext";
import { useNavigate } from "react-router-dom";
const MoviesSlide = (props) => {
  const { genre } = StateContextCustom();
  const nav = useNavigate();

  return (
    <div className="grid grid-cols-12 gap-8 mx-5">
      {props.data?.map((movie) => {
        return (
          <div
            key={movie.id}
            className="col-span-1 relative flex flex-col gap-1"
            onClick={() => nav(`/detail/${movie.id}`)}
          >
            <Badge
              variant="filled"
              size="lg"
              radius="lg"
              className="absolute -top-3 left-[40%] bg-red-900"
            >
              {movie?.vote_average}
            </Badge>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              className=" h-[300px] rounded "
            />
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
          </div>
        );
      })}
    </div>
  );
};

export default MoviesSlide;

{
  /* <img
  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
  className=" h-full w-full "
/> */
}
