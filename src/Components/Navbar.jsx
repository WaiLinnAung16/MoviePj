import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
import { motion, stagger } from "framer-motion";
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
const mobileNavBox = {
  initial: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
  animate: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.4,
      staggerChildren: 0.5,
    },
  },
};

const mobileNav = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handler = () => {
    setShow((show) => (show = !show));
  };
  window.addEventListener("scroll", () => {
    setShow(false);
  });
  return (
    <>
      <div className=" py-5 px-5 fixed top-0 w-full z-50 bg-slate-100">
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
                <NavLink
                  id="navMenu"
                  to={`${nav.link}`}
                  className="text-black"
                  key={nav.id}
                >
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
      </div>
      {/* Mobile Navbar */}
      <motion.div
        variants={mobileNavBox}
        initial={false}
        animate={show ? "animate" : "initial"}
        className="bg-slate-100/80 backdrop-blur-md h-screen w-full top-0 left-0 origin-top flex items-end absolute z-40"
      >
        <div className="flex flex-col gap-5 mb-5 ml-5">
          {navlink.map((nav) => {
            return (
              <motion.div
                variants={mobileNav}
                onClick={() => {
                  navigate(nav.link);
                  setShow(false);
                }}
                key={nav.id}
                className="font-black text-[#333] text-7xl uppercase"
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
