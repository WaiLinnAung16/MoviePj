import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
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
const Navbar = () => {
  return (
    <div className=" py-5">
      <div className=" container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="relative group">
            <span className="flex items-center gap-1 z-20 font-extrabold text-2xl text-white bg-slate-800 px-3 py-1 relative transition-all duration-500 -skew-y-3 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <RiMovie2Line />
              YinShote
            </span>
            <span className="-z-10 after:block after:absolute after:-inset-0 after:-skew-y-3  after:border-2 after:border-slate-800"></span>
          </h1>
        </Link>
        <ul className="flex items-center gap-3">
          {navlink.map((nav) => {
            return (
              <NavLink id="navMenu" to={`${nav.link}`} className="text-black">
                {nav.title}
                {/* <span
                  id="border"
                  // className="after:block after:absolute after:-inset-0 after:border-2 after:border-slate-900 after:translate-x-1 after:translate-y-1"
                ></span> */}
              </NavLink>
            );
          })}
          {/* <NavLink className=" bg-slate-900 px-4 py-1 text-white relative">
            Home
            <span className="after:block after:absolute after:-inset-0 after:border-2 after:border-slate-900 after:translate-x-1 after:translate-y-1"></span>
          </NavLink>
          <li>Movies</li>
          <li>TvShow</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
