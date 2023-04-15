import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShow from "./pages/TvShow";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/TvShow" element={<TvShow />} />
      </Routes>
      <div className=" my-[130px]"></div>
      <Footer />
    </div>
  );
};

export default App;
