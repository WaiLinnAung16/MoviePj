import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";
import { Title } from "@mantine/core";

const Detail = () => {
  window.scrollTo({
    top: 0,
  });
  const { id } = useParams();
  const { setMovieId, detail } = StateContextCustom();
  useEffect(() => {
    setMovieId(id);
  }, []);
  return (
    <div className="mt-20 bg-img min-h-screen">
      <div className="relative">
        <div className="bg-gradient-to-b from-slate-800/40 to-slate-900 absolute top-0 w-full h-screen backdrop-blur-sm"></div>
        <div className="h-screen">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[20%] left-[25%] flex items-center gap-5 backdrop-blur-md rounded container w-[40%]">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`}
            className=" h-[500px] rounded"
          />
          <div className="text-white p-5 flex flex-col gap-3">
            <Title>{detail?.title}</Title>
            <div className="flex gap-3">
              {detail?.genres?.map((genre) => (
                <h1
                  className="bg-red-900 rounded-md px-2 text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </h1>
              ))}
            </div>
            <div className="flex justify-between text-sm text-slate-300 mt-3">
              <p>
                Rating{" "}
                <span className="font-bold text-white">
                  {detail?.vote_average}
                </span>
              </p>
              <p>
                Release date{" "}
                <span className="font-bold text-white">
                  {detail?.release_date}
                </span>
              </p>
            </div>
            <p className="text-lg text-slate-100">{detail?.overview}</p>
            <button className=" px-8 py-2 bg-red-900 font-bold self-start rounded-sm transition hover:bg-red-700">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
