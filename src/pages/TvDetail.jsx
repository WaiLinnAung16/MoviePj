import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";
import { Avatar, Title } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import DetailLoading from "../Components/DetailLoading";
import { Carousel } from "@mantine/carousel";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const TvDetail = () => {
  window.scrollTo({
    top: 0,
  });
  const { id } = useParams();
  const nav = useNavigate();
  const {
    setTvId,
    tvDetail,
    tvCast,
    tvTrailer,
    detailLoading,
    setDetailLoading,
  } = StateContextCustom();
  useEffect(() => {
    setTvId(id);
    setDetailLoading(false);
  }, [tvDetail, tvCast]);
  return (
    <>
      {detailLoading ? (
        <DetailLoading />
      ) : (
        <div className="w-full h-screen bg-img mt-20">
          <div
            className="w-full h-[60%] bg-center bg-cover"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvDetail?.backdrop_path})`,
            }}
          >
            <div className="w-full h-full px-5 min-[2560px]:px-20 flex justify-between items-end bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900">
              <div className="text-white flex flex-col gap-3 mb-10">
                <h1 className="text-2xl lg:text-3xl font-extrabold">
                  {tvDetail?.name}
                </h1>
                <div className="flex items-center flex-wrap gap-2">
                  {tvDetail?.genres?.map((genre, i) => (
                    <h1 className="bg-red-900 rounded-md px-2 text-sm" key={i}>
                      {genre.name}
                    </h1>
                  ))}
                </div>
                <div className="flex items-center flex-wrap gap-1 text-sm">
                  <AiFillStar className="text-yellow-400" />
                  <span>{tvDetail?.vote_average?.toFixed(1)}</span> /
                  <MdDateRange className="ml-1" />
                  <p>
                    {tvDetail?.first_air_date} - {tvDetail?.last_air_date}
                  </p>{" "}
                  /
                  <FiClock className="ml-1" />
                  <p>{tvDetail?.episode_run_time?.map((t) => t)}m</p>
                </div>
                <div>
                  <h1 className="text-lg font-bold mb-1">Starring</h1>
                  <div className="flex flex-wrap gap-1">
                    {tvCast?.map((c, i) => {
                      return (
                        i < 3 && (
                          <p className="font-semibold" key={i}>
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
          <div className="grid grid-cols-12 gap-8 py-8 px-5 bg-slate-300/20 text-slate-900">
            <div className="col-span-12 lg:col-span-3 xl:col-span-2 flex xl:justify-center">
              <img
                src={`https://image.tmdb.org/t/p/original/${tvDetail?.poster_path}`}
                className="h-[350px] xl:h-[400px] rounded"
              />
            </div>
            <div className="col-span-12 lg:col-span-9 xl:col-span-6 flex flex-col gap-3">
              <div>
                <h1 className="text-xl font-bold mb-3">Synopsis</h1>
                <p className=" leading-6 w-[95%]">{tvDetail?.overview}</p>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-3">Starring</h1>
                <div className="grid grid-cols-12 gap-4 h-[250px] overflow-y-scroll custom-scrollbar ">
                  {tvCast?.map((c, i) => (
                    <div
                      className="col-span-6 md:col-span-3  xl:col-span-2"
                      key={i}
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
            <div className="col-span-12 lg:col-span-12 xl:col-span-4">
              <h1 className="text-xl font-bold mb-3">Videos</h1>
              {tvTrailer?.length !== 0 ? (
                <Carousel
                  height={200}
                  styles={{
                    control: {
                      width: "40px",
                      height: "40px",
                      opacity: 1,
                      backgroundColor: "#fff !important",

                      "&[data-inactive]": {
                        opacity: 0,
                        cursor: "default",
                      },
                    },
                  }}
                >
                  {tvTrailer?.map((t) => {
                    return (
                      <embed
                        src={`https://www.youtube.com/embed/${t.key}`}
                        className="rounded ml-2"
                        key={t.id}
                      />
                    );
                  })}
                </Carousel>
              ) : (
                <Title>There is no videos!</Title>
              )}
            </div>
          </div>
          <div
            onClick={() => nav(-1)}
            className="w-full lg:flex justify-center hidden"
          >
            <p className="text-xl text-white flex items-center gap-2 absolute top-24  cursor-pointer ">
              <BsFillArrowLeftCircleFill /> Back to previous page
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TvDetail;
// <div className=" h-full 2xl:h-screen bg-img flex justify-center items-center mt-20">
//   <div className="fixed top-0 h-screen">
//     <div className="bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900/80 absolute top-0 w-full h-full z-10"></div>
//     <img
//       src={`https://image.tmdb.org/t/p/original/${tvDetail?.backdrop_path}`}
//       className="h-full w-screen object-cover object-center"
//     />
//   </div>

//   <div className="flex gap-5 flex-col items-center lg:items-start lg:flex-row container backdrop-blur-md shadow p-5 z-30">
//     <img
//       src={`https://image.tmdb.org/t/p/original/${tvDetail?.poster_path}`}
//       className="w-[50%] h-[250px] md:w-[35%] md:h-[350px] lg:w-[25%] lg:h-[450px] rounded"
//     />
//     <div className="text-slate-200 flex flex-col gap-4 items-start">
//       <div>
//         <h1 className="text-3xl md:text-3xl xl:text-4xl font-extrabold tracking-wide mb-1">
//           {tvDetail?.name}
//         </h1>
//         <div className="flex items-center flex-wrap gap-2 mb-2">
//           {tvDetail?.genres?.map((genre) => (
//             <h1
//               className="bg-red-900 rounded-md px-2 text-sm"
//               key={genre.id}
//             >
//               {genre.name}
//             </h1>
//           ))}
//         </div>
//         <div className="flex items-center flex-wrap gap-1 ">
//           <AiFillStar className="text-yellow-400" />
//           <span className="">
//             {tvDetail?.vote_average?.toFixed(1)}
//           </span>{" "}
//           / <MdDateRange className="ml-1" />
//           <p>
//             {tvDetail?.first_air_date} - {tvDetail?.last_air_date}
//           </p>{" "}
//           /
//           <FiClock className="ml-1" />
//           <p>{tvDetail?.episode_run_time?.map((t) => t)}m</p>
//         </div>
//       </div>

//       <div>
//         <h1 className="text-xl font-bold tracking-wide mb-1">
//           Synopsis
//         </h1>
//         <p className=" leading-6 text-slate-100">
//           {tvDetail?.overview}
//         </p>
//       </div>
//       <h1 className="text-xl font-bold tracking-wide mb-3">Cast</h1>
//       <div>
//         {tvCast?.length === 0 ? (
//           <h1>There is no data.</h1>
//         ) : (
//           <div className="h-[220px] overflow-y-scroll custom-scrollbar">
//             <div className="grid grid-cols-12 gap-4">
//               {tvCast?.map((c) => (
//                 <div
//                   key={c.id}
//                   className="col-span-6 md:col-span-2 lg:col-span-3 xl:col-span-2"
//                 >
//                   <Avatar
//                     size="lg"
//                     src={`https://image.tmdb.org/t/p/original/${c?.profile_path}`}
//                   ></Avatar>
//                   <h1 className="font-semibold mt-2">{c?.name}</h1>
//                   <p className="font-light text-slate-100 italic">
//                     {c?.character}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// </div>
