import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";

const Detail = () => {
  const { id } = useParams();
  const { setMovieId, detail } = StateContextCustom();
  useEffect(() => {
    setMovieId(id);
  }, []);
  return (
    <div className="mt-20 bg-img min-h-screen">
      <div className="relative">
        <div className="bg-slate-900 h-screen">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`}
            className=" w-full h-full object-cover opacity-40 blur-md"
          />
        </div>
        <div className="absolute top-[20%] left-[20%]">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`}
            className=" h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
