import React, { useState } from "react";
import Hero from "../Components/Hero";
import TopRated from "../Components/TopRated";
import TvShows from "../Components/TvShows";
import Popular from "../Components/Popular";
import Footer from "../Components/Footer";
import { LuArrowUpSquare } from "react-icons/lu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
const Home = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > 500) {
      setHidden(false);
    } else if (latest < 150) {
      setHidden(true);
    }
  });
  return (
    <>
      <div className=" pb-10 bg-img">
        <Hero />
        <div className="container mx-auto">
          <Popular />
          <TopRated />
          <TvShows />
        </div>
      </div>
      <Footer />
      {/* Scroll top */}
      <motion.div
        variants={{ hidden: { y: "160%" }, visible: { y: 0,scale:.8 } }}
        whileHover={{scale:1}}
        initial={false}
        animate={hidden ? "hidden" : "visible"}
        onClick={() => scrollTo({ top: 0 ,behavior:'smooth'})}
        className="fixed bottom-4 right-5 bg-black rounded-md z-50 cursor-pointer"
      >
        <LuArrowUpSquare className="text-4xl text-white" />
      </motion.div>
    </>
  );
};

export default Home;
