import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
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
  const [show, setShow] = useState(false);
  const handler = () => {
    setShow((show) => (show = !show));
  };
  return (
    <>
      <div className=" py-5 px-5 fixed top-0 w-full z-50 bg-slate-100">
        <div className=" container mx-auto flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="relative group cursor-pointer">
              <span className="flex items-center gap-1 z-20 font-extrabold text-2xl text-white bg-slate-900 px-3 py-1 relative transition-all duration-500 -skew-y-3 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <RiMovie2Line />
                Moviezine
              </span>
              <span className="-z-10 after:block after:absolute after:-inset-0 after:-skew-y-3  after:border-2 after:border-slate-800"></span>
            </h1>
          </Link>
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
      {show && (
        <div className="fixed z-50 bg-slate-50 w-full py-3 top-20">
          <ul className="flex flex-col justify-end  items-center gap-5">
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
      )}
    </>
  );
};

export default Navbar;
