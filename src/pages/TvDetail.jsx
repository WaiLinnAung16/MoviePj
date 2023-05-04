import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";
import { Avatar } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import DetailLoading from "../Components/DetailLoading";
const TvDetail = () => {
  window.scrollTo({
    top: 0,
  });
  const { id } = useParams();
  const { setTvId, tvDetail, tvCast, detailLoading, setDetailLoading } =
    StateContextCustom();
  useEffect(() => {
    setTvId(id);
    setDetailLoading(false);
  }, [tvDetail, tvCast]);
  return (
    <>
      {detailLoading ? (
        <DetailLoading />
      ) : (
        <div className=" h-full lg:h-screen bg-img flex justify-center items-center mt-20">
          <div className="fixed top-0 h-screen">
            <div className="bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900/80 absolute top-0 w-full h-full z-10"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${tvDetail?.backdrop_path}`}
              className="h-full w-screen object-cover object-center"
            />
          </div>

          <div className="flex gap-5 flex-col items-center lg:flex-row container backdrop-blur-md shadow p-5 z-30">
            <img
              src={`https://image.tmdb.org/t/p/original/${tvDetail?.poster_path}`}
              className="w-[50%] h-[250px] md:w-[35%] md:h-[350px] lg:h-[500px] rounded"
            />
            <div className="text-slate-200 flex flex-col gap-4 items-start">
              <div>
                <h1 className="text-3xl md:text-3xl xl:text-4xl font-extrabold tracking-wide mb-1">
                  {tvDetail?.name}
                </h1>
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  {tvDetail?.genres?.map((genre) => (
                    <h1
                      className="bg-red-900 rounded-md px-2 text-sm"
                      key={genre.id}
                    >
                      {genre.name}
                    </h1>
                  ))}
                </div>
                <div className="flex items-center flex-wrap gap-1 ">
                  <AiFillStar className="text-yellow-400" />
                  <span className="">
                    {tvDetail?.vote_average?.toFixed(1)}
                  </span>{" "}
                  / <MdDateRange className="ml-1" />
                  <p>
                    {tvDetail?.first_air_date} - {tvDetail?.last_air_date}
                  </p>{" "}
                  /
                  <FiClock className="ml-1" />
                  <p>{tvDetail?.episode_run_time?.map((t) => t)}m</p>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-wide mb-1">
                  Synopsis
                </h1>
                <p className=" leading-6 text-slate-100">
                  {tvDetail?.overview}
                </p>
              </div>
              <h1 className="text-xl font-bold tracking-wide mb-3">Cast</h1>
              <div>
                {tvCast?.length === 0 ? (
                  <h1>There is no data.</h1>
                ) : (
                  <div className="h-[220px] overflow-y-scroll custom-scrollbar">
                    <div className="grid grid-cols-12 gap-4">
                      {tvCast?.map((c) => (
                        <div
                          key={c.id}
                          className="col-span-6 md:col-span-2 lg:col-span-3 xl:col-span-2"
                        >
                          <Avatar
                            size="lg"
                            src={`https://image.tmdb.org/t/p/original/${c?.profile_path}`}
                          ></Avatar>
                          <h1 className="font-semibold mt-2">{c?.name}</h1>
                          <p className="font-light text-slate-100 italic">
                            {c?.character}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TvDetail;
