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
    <div className="bg-slate-100 border-t border-slate-200 px-5">
      <div className="flex items-center justify-center gap-10 text-3xl cursor-pointer container mx-auto py-8">
        <FaFacebook className="transition hover:scale-125" />
        <FaFacebookMessenger className="transition hover:scale-125" />
        <FaGithub className="transition hover:scale-125" />
      </div>
    </div>
  );
};

export default Footer;
