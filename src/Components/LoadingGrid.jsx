import React from "react";

export const SingleLoading = () => {
  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-1 flex flex-col gap-3 w-[200px] h-[300px]">
      <div className="w-full h-full bg-slate-400 rounded"></div>
      <div>
        <div className="w-40 h-3 bg-slate-400 rounded-full mb-2"></div>
        <div className="flex gap-2">
          <div className="w-16 h-3 bg-slate-400 rounded-full"></div>
          <div className="w-16 h-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const LoadingGrid = () => {
  return (
    <div className="grid grid-cols-12 gap-8 mx-5 animate-pulse">
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
      <SingleLoading />
    </div>
  );
};

export default LoadingGrid;
