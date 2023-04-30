import React from "react";

const DetailLoading = () => {
  return (
    <div className=" h-screen  flex justify-center items-center bg-slate-300 animate-pulse">
      <div className="flex gap-5 flex-col items-center lg:flex-row container p-5 z-30 bg-slate-200">
        <div className="w-[50%] h-[250px] md:w-[50%] md:h-[350px] lg:h-[500px] rounded bg-slate-500"></div>
        <div className="flex flex-col gap-5">
          <div className="w-96 h-6 bg-slate-500 rounded"></div>
          <div className="flex gap-2">
            <div className="w-20 h-5 bg-slate-500 rounded"></div>
            <div className="w-20 h-5 bg-slate-500 rounded"></div>
            <div className="w-20 h-5 bg-slate-500 rounded"></div>
          </div>
          <div className="w-20 h-5 bg-slate-500 rounded"></div>
          <div className="flex flex-wrap gap-2 w-[50%]">
            <div className="w-40 h-2 bg-slate-500 rounded"></div>
            <div className="w-16 h-2 bg-slate-500 rounded"></div>
            <div className="w-20 h-2 bg-slate-500 rounded"></div>
            <div className="w-10 h-2 bg-slate-500 rounded"></div>
            <div className="w-44 h-2 bg-slate-500 rounded"></div>
            <div className="w-52 h-2 bg-slate-500 rounded"></div>
            <div className="w-20 h-2 bg-slate-500 rounded"></div>
            <div className="w-10 h-2 bg-slate-500 rounded"></div>
            <div className="w-64 h-2 bg-slate-500 rounded"></div>
            <div className="w-52 h-2 bg-slate-500 rounded"></div>
            <div className="w-40 h-2 bg-slate-500 rounded"></div>
            <div className="w-16 h-2 bg-slate-500 rounded"></div>
            <div className="w-20 h-2 bg-slate-500 rounded"></div>
            <div className="w-10 h-2 bg-slate-500 rounded"></div>
            <div className="w-44 h-2 bg-slate-500 rounded"></div>
            <div className="w-52 h-2 bg-slate-500 rounded"></div>
            <div className="w-20 h-2 bg-slate-500 rounded"></div>
            <div className="w-10 h-2 bg-slate-500 rounded"></div>
            <div className="w-64 h-2 bg-slate-500 rounded"></div>
            <div className="w-52 h-2 bg-slate-500 rounded"></div>
          </div>
          <div className="w-20 h-5 bg-slate-500 rounded"></div>
          <div className="flex  items-center gap-5">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-slate-500 rounded-full"></div>
              <div className="w-14 h-3 bg-slate-500 rounded"></div>
              <div className="w-20 h-5 bg-slate-500 rounded"></div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-slate-500 rounded-full"></div>
              <div className="w-14 h-3 bg-slate-500 rounded"></div>
              <div className="w-20 h-5 bg-slate-500 rounded"></div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-slate-500 rounded-full"></div>
              <div className="w-14 h-3 bg-slate-500 rounded"></div>
              <div className="w-20 h-5 bg-slate-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLoading;
