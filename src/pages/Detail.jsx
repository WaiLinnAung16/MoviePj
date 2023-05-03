import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";
import { Avatar } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { IoPlayOutline } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import DetailLoading from "../Components/DetailLoading";
const Detail = () => {
  window.scrollTo({
    top: 0,
  });
  const { id } = useParams();
  const { setMovieId, detail, cast, trailer, detailLoading,setDetailLoading } =
    StateContextCustom();
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const getHourMin = (num) => {
    setHour(Math.floor(num / 60).toString());
    setMinute((num / 60).toFixed(2).toString().split(".")[1]);
  };
  useEffect(() => {
    setMovieId(id);
    getHourMin(detail.runtime);
    setDetailLoading(false)
  }, [detail, trailer, cast]);
  return (
    <>
      {detailLoading ? (
        <DetailLoading />
      ) : (
        <div className=" h-full 2xl:h-screen bg-img flex justify-center items-center mt-20">
          <div className="fixed top-0 h-screen">
            <div className="bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900/80 absolute top-0 w-full h-full z-10"></div>
            <LazyLoadImage
              effect="blur"
              width="100%"
              height="100%"
              src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`}
              className="h-full w-screen object-cover object-center"
            />
          </div>

          <div className="flex gap-5 flex-col items-center lg:flex-row container backdrop-blur-md shadow p-5 z-30">
            <img
              src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`}
              className="w-[50%] h-[250px] md:w-[25%] md:h-[350px] lg:h-[500px] rounded"
            />
            <div className="text-slate-200 flex flex-col gap-4 items-start">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl md:text-3xl xl:text-4xl font-extrabold tracking-wide mb-1">
                    {detail?.title}
                  </h1>
                  <div>
                    {trailer?.map((t, i) => {
                      return (
                        i === trailer.length - 1 && (
                          <a
                            key={t.id}
                            href={`https://youtu.be/${t.key}`}
                            target="_blank"
                            className="flex items-center gap-1 border border-white px-2 py-1 rounded-full"
                          >
                            <IoPlayOutline className="text-xl" />
                            Play Trailer
                          </a>
                        )
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-2 mb-2 mt-3 md:mt-0">
                  {detail?.genres?.map((genre) => (
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
                    {detail?.vote_average?.toFixed(1)}
                  </span> / <MdDateRange className="ml-1" />
                  <p>{detail?.release_date}</p> /
                  <FiClock className="ml-1" />
                  <p>
                    {hour}h {minute}m
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-wide mb-1">
                  Synopsis
                </h1>
                <p className=" leading-6 text-slate-100">{detail?.overview}</p>
              </div>
              <h1 className="text-xl font-bold tracking-wide mb-3">Cast</h1>
              <div className="h-[220px] overflow-y-scroll custom-scrollbar ">
                <div className="grid grid-cols-12 gap-4">
                  {cast?.map((c, i) => (
                    <div
                      className="col-span-6 md:col-span-3  xl:col-span-2"
                      key={c.id}
                    >
                      <Avatar
                        size="lg"
                        src={`https://image.tmdb.org/t/p/original/${c.profile_path}`}
                      ></Avatar>
                      <h1 className="font-semibold mt-2">{c?.name}</h1>
                      <p className="font-light text-slate-100 italic">
                        {c?.character}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
