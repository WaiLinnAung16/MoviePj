import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
import {
  animate,
  motion,
  stagger,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu } from "@mantine/core";
import { useEffect } from "react";
const navlink = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Movies",
    link: "/movies",
  },
  {
    id: 3,
    title: "TvShow",
    link: "/TvShow",
  },
];

const mobileNavContainer = {
  initial: {
    y: '-130%',
    transition:{
      duration:0.5,
      when:'afterChildren'
    }
  },
  animate: {
    y: 0,
    transition: {
      duration:0.5,
      when: "beforeChildren",
      staggerChildren: 0.09,
      ease:[0.6,0.1,1,0.5]
    },
    
  },
};

const mobileNav = {
  initial: {
    opacity: 0,
    y: -50,
    
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev) {
      setShow(false);
    }
    if (latest > prev && prev > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const handler = () => {
    setShow((show) => (show = !show));
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: 0,
          },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          type: "spring",
          duration: 0.3,
        }}
        className=" py-5 px-5 fixed top-0 w-full z-50 bg-slate-100"
      >
        <div className=" container mx-auto flex justify-between items-center relative">
          <Link to={"/"}>
            <h1 className="relative group cursor-pointer">
              <span className="flex items-center gap-1 z-20 font-extrabold text-2xl text-white bg-slate-900 px-3 py-1 relative transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <RiMovie2Line />
                Moviezine
              </span>
              <span className="-z-10 after:block after:absolute after:-inset-0 after:border-2 after:border-slate-900"></span>
            </h1>
          </Link>
          <ul className="lg:flex items-center gap-3 hidden">
            {navlink.map((nav) => {
              return (
                <NavLink id="navMenu" to={`${nav.link}`} key={nav.id}>
                  {nav.title}
                </NavLink>
              );
            })}
          </ul>

          {show ? (
            <RxCross2
              className="flex lg:hidden text-3xl"
              onClick={() => handler()}
            />
          ) : (
            <IoMenu
              className="flex lg:hidden text-3xl"
              onClick={() => handler()}
            />
          )}
        </div>
      </motion.div>
      {/* Mobile Navbar */}
      <motion.div
        variants={mobileNavContainer}
        initial={false}
        animate={show ? "animate" : "initial"}
        className="bg-slate-100/80 backdrop-blur-md h-screen w-full fixed z-40"
      >
        <div className="flex flex-col items-center justify-center gap-5 h-full mb-5">
          {navlink.map((nav) => {
            return (
              <motion.div
                variants={mobileNav}
                onClick={() => {
                  navigate(nav.link);
                  setShow(false);
                }}
                key={nav.id}
                className="font-black text-slate-900 text-2xl uppercase"
              >
                {nav.title}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
