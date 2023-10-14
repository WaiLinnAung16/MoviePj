import React from "react";
import SlideLoading from "./SlideLoading";

const DetailLoading = () => {
  return (
    <>
      <SlideLoading />
      <div className="px-5 mt-5 grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-3 xl:col-span-2 2xl:col-span-2 min-[2550px]:col-span-2">
          <div className="w-full h-[300px] rounded bg-slate-300 animate-pulse "></div>
        </div>
        <div className="col-span-12 lg:col-span-9 xl:col-span-6 2xl:col-span-6 flex flex-col gap-3">
          <h1 className="text-xl font-bold mb-2">Synopsis</h1>
          <div className="flex flex-wrap gap-1">
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-16 h-2 bg-slate-300 rounded"></div>
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-10 h-2 bg-slate-300 rounded"></div>
            <div className="w-35 h-2 bg-slate-300 rounded"></div>
            <div className="w-39 h-2 bg-slate-300 rounded"></div>
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-10 h-2 bg-slate-300 rounded"></div>
            <div className="w-30 h-2 bg-slate-300 rounded"></div>
            <div className="w-52 h-2 bg-slate-300 rounded"></div>
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-16 h-2 bg-slate-300 rounded"></div>
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-10 h-2 bg-slate-300 rounded"></div>
            <div className="w-35 h-2 bg-slate-300 rounded"></div>
            <div className="w-39 h-2 bg-slate-300 rounded"></div>
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-10 h-2 bg-slate-300 rounded"></div>
            <div className="w-30 h-2 bg-slate-300 rounded"></div>
            <div className="w-52 h-2 bg-slate-300 rounded"></div>
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-16 h-2 bg-slate-300 rounded"></div>
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-10 h-2 bg-slate-300 rounded"></div>
            <div className="w-35 h-2 bg-slate-300 rounded"></div>
            <div className="w-39 h-2 bg-slate-300 rounded"></div>
            <div className="w-20 h-2 bg-slate-300 rounded"></div>
            <div className="w-10 h-2 bg-slate-300 rounded"></div>
          </div>
          <h1 className="text-xl font-bold mb-3">Starring</h1>
          <div className="flex gap-5">
            <div className="h-[180px] flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="w-[60px] h-3 bg-slate-300"></div>
              <div className="w-[90px] h-4 bg-slate-300"></div>
            </div>
            <div className="h-[180px] flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="w-[60px] h-3 bg-slate-300"></div>
              <div className="w-[90px] h-4 bg-slate-300"></div>
            </div>
            <div className="h-[180px] flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="w-[60px] h-3 bg-slate-300"></div>
              <div className="w-[90px] h-4 bg-slate-300"></div>
            </div>
            <div className="h-[180px] flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="w-[60px] h-3 bg-slate-300"></div>
              <div className="w-[90px] h-4 bg-slate-300"></div>
            </div>
          </div>
        </div>
        <div className="ol-span-12 xl:col-span-4 2xl:col-span-4">
          <h1 className="text-xl font-bold mb-3">Videos</h1>
          <div
            className="w-full h-[200px] bg-slate-300 rounded
          "
          ></div>
        </div>
      </div>
    </>
  );
};

export default DetailLoading;
