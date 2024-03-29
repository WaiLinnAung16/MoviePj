import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import DetailLoading from "../Components/DetailLoading";
import { Carousel } from "@mantine/carousel";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Detail = () => {
  window.scrollTo({
    top: 0,
  });
  const { id } = useParams();
  const nav = useNavigate();
  // const { setMovieId, cast, trailer, detailLoading, setDetailLoading } =
  //   StateContextCustom();
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const getHourMin = (num) => {
    setHour(Math.floor(num / 60).toString());
    setMinute((num / 60).toFixed(2).toString().split(".")[1]);
  };

  const [detail, setDetail] = useState([]);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [detailLoading, setDetailLoading] = useState(true);
  const fetchMovieDetail = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const results = await api.json();
    setDetail(results);
  };
  const fetchCast = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const { cast } = await api.json();
    setCast(cast);
  };
  const fetchTrailer = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const { results } = await api.json();
    setTrailer(results);
  };
  useEffect(() => {
    fetchMovieDetail();
    fetchCast();
    fetchTrailer();
  }, [id]);
  useEffect(() => {
    setDetailLoading(false);
    getHourMin(detail?.runtime);
  }, [detail]);
  return (
    <>
      {detailLoading ? (
        <DetailLoading />
      ) : (
        <div className="w-full h-screen bg-img mt-20">
          <div
            className="w-full h-[60%] bg-center bg-cover"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail?.backdrop_path})`,
            }}
          >
            <div className="w-full h-full px-5 min-[2560px]:px-20 flex justify-between items-end bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900">
              <div className="text-white flex flex-col gap-3 mb-10">
                <h1 className="text-2xl lg:text-3xl font-extrabold">
                  {detail?.title}
                </h1>
                <div className="flex items-center flex-wrap gap-2">
                  {detail?.genres?.map((genre, i) => (
                    <h1
                      className="bg-red-900 rounded-md px-2 text-sm"
                      key={genre.id}
                    >
                      {genre.name}
                    </h1>
                  ))}
                </div>
                <div className="flex items-center flex-wrap gap-1 text-sm">
                  <AiFillStar className="text-yellow-400" />
                  <span>{detail?.vote_average?.toFixed(1)}</span> /
                  <MdDateRange className="ml-1" />
                  <p>{detail?.release_date}</p> /
                  <FiClock className="ml-1" />
                  <p>
                    {hour}h {minute}m
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-bold mb-1">Starring</h1>
                  <div className="flex flex-wrap gap-1">
                    {cast?.map((c, i) => {
                      return (
                        i < 3 && (
                          <p className="font-semibold" key={c.id}>
                            {c?.name}
                            {i === 2 ? "" : ","}
                          </p>
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 py-8 pl-5 min-h-[40%] min-[2550px]:pl-20 bg-slate-300/20 text-slate-900">
            <div className="col-span-12 lg:col-span-3 xl:col-span-2 2xl:col-span-2 min-[2550px]:col-span-2">
              <img
                src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`}
                className="h-[350px] 2xl:[450px] rounded"
              />
            </div>
            <div className="col-span-12 lg:col-span-9 xl:col-span-6 2xl:col-span-6 flex flex-col gap-3">
              <div>
                <h1 className="text-xl font-bold mb-3">Synopsis</h1>
                <p className=" leading-6  w-[95%]">{detail?.overview}</p>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-3">Starring</h1>
                <div className="grid grid-cols-12 gap-4 h-[200px] lg:h-[180px] xl:h-[200px] 2xl:h-[180px] overflow-y-scroll custom-scrollbar ">
                  {cast?.map((c) => (
                    <div
                      className="col-span-6 md:col-span-3 xl:col-span-2"
                      key={c.id}
                    >
                      <Avatar
                        size="lg"
                        src={`https://image.tmdb.org/t/p/original/${c.profile_path}`}
                      ></Avatar>
                      <h1 className="font-semibold mt-2">{c?.name}</h1>
                      <p className="font-light italic">{c?.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-4 2xl:col-span-4">
              <h1 className="text-xl font-bold mb-3">Videos</h1>
              <Carousel
                align="start"
                height={200}
                styles={{
                  controls: {
                    top: -50,
                    left: "unset",
                    width: "110px",
                  },
                  control: {
                    width: "40px",
                    height: "40px",
                    right: 0,
                    opacity: 1,
                    backgroundColor: "#fff !important",
                  },
                }}
              >
                {trailer?.map((t, index) => {
                  if (index < 5) {
                    return (
                      <div
                        className="flex flex-col text-center gap-1 px-1"
                        key={t.id}
                      >
                        <embed
                          src={`https://www.youtube.com/embed/${t.key}`}
                          className="rounded"
                        />
                        <a
                          className="text-black rounded border border-slate-800 px-4 py-1 transition-all duration-500 hover:text-white hover:bg-slate-800"
                          target="_blank"
                          href={`https://youtu.be/${t.key}`}
                        >
                          Watch on YouTube
                        </a>
                      </div>
                    );
                  }
                })}
              </Carousel>
            </div>
          </div>
          <div
            onClick={() => nav(-1)}
            className="w-full lg:flex justify-end pr-5 hidden"
          >
            <p className="text-xl text-white flex items-center gap-2 absolute top-24  cursor-pointer">
              <BsFillArrowLeftCircleFill /> Back to previous page
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
