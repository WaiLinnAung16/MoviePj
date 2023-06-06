import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
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

          {show && (
            <div className="fixed z-50 bg-slate-100/90 backdrop-blur-sm w-full py-5 left-0 top-20 lg:hidden">
              <ul className="flex flex-col mx-5 gap-5">
                {navlink.map((nav) => {
                  return (
                    <NavLink
                      id="navMenu"
                      to={`${nav.link}`}
                      className="text-black"
                      key={nav.id}
                      onClick={() => handler()}
                    >
                      {nav.title}
                    </NavLink>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
