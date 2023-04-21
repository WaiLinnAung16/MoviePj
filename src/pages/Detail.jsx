import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";
import { Title } from "@mantine/core";
import { RxDot, RxDotFilled } from "react-icons/rx";
const Detail = () => {
  window.scrollTo({
    top: 0,
  });
  const { id } = useParams();
  const { setMovieId, detail } = StateContextCustom();
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const getHourMin = (num) => {
    setHour(Math.floor(num / 60).toString());
    setMinute((num / 60).toFixed(2).toString().split(".")[1]);
  };
  useEffect(() => {
    setMovieId(id);
    console.log(detail);
    getHourMin(detail.runtime);
  }, [detail]);
  return (
    <div className="mt-20 min-h-screen">
      <div className="bg-gradient-to-b from-slate-800/40 to-slate-900 absolute top-0 w-full h-screen backdrop-blur-sm"></div>
      <div className="h-screen">
        <img
          src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`}
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="absolute py-5 lg:py-0 top-[3%] lg:top-[20%] left-[5%] md:left-[10%] lg:left-[2%] xl:left-[15%] 2xl:left-[20%] w-[90%] md:w-[80%] lg:w-[95%] xl:w-[70%] 2xl:w-[45%] flex items-center flex-col  lg:flex-row gap-5 backdrop-blur-md rounded shadow-md container ">
        <img
          src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`}
          className="h-[400px] lg:h-[500px] rounded "
        />

        <div className="text-white p-3 flex flex-col gap-4">
          <div>
            <h1 className="text-3xl md:text-3xl xl:text-4xl font-extrabold tracking-wide mb-3">
              {detail?.title}
              <span className="text-base xl:text-lg font-semibold text-slate-300 ml-2">
                ( {detail?.vote_average?.toFixed(1)} )
              </span>
            </h1>

            <div className="flex items-center flex-wrap gap-2 xl:gap-3">
              {detail?.genres?.map((genre) => (
                <h1
                  className="bg-red-900 rounded-md px-2 text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </h1>
              ))}
              <div className="flex items-center gap-2 text-sm">
                <p>{detail?.release_date}</p>
                <RxDotFilled />
                <p>
                  {hour}h {minute}m
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1">Overview</h1>
            <p className=" leading-6">{detail?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
