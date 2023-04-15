import React from "react";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiMovie2Line,
} from "react-icons/ri";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-100 mt-20 border-t border-slate-200 fixed bottom-0 w-full -z-30">
      <div className="container mx-auto flex justify-between items-center py-10">
        <h1 className="relative group cursor-pointer">
          <span className="flex items-center gap-1 z-20 font-extrabold text-2xl text-white bg-slate-900 px-3 py-1 relative transition-all duration-500 -skew-y-3 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <RiMovie2Line />
            YinShote
          </span>
          <span className="-z-10 after:block after:absolute after:-inset-0 after:-skew-y-3  after:border-2 after:border-slate-800"></span>
        </h1>
        <div className="flex items-center gap-3 text-2xl cursor-pointer">
          <FaFacebook className="transition hover:scale-125" />
          <FaFacebookMessenger className="transition hover:scale-125" />
          <FaGithub className="transition hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
