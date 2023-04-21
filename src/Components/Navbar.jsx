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
    <div className=" py-5 px-5 fixed top-0 w-full z-50 bg-slate-100/80 backdrop-blur-sm">
      <div className=" container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="relative group cursor-pointer">
            <span className="flex items-center gap-1 z-20 font-extrabold text-2xl text-white bg-slate-900 px-3 py-1 relative transition-all duration-500 -skew-y-3 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <RiMovie2Line />
              YinShote
            </span>
            <span className="-z-10 after:block after:absolute after:-inset-0 after:-skew-y-3  after:border-2 after:border-slate-800"></span>
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
      </div>
    </div>
  );
};

export default Navbar;
