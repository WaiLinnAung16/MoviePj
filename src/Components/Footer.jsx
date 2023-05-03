import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-slate-100 border-t border-slate-200 px-5">
      <div className="flex items-center justify-center gap-10 text-3xl cursor-pointer container mx-auto py-8">
        <Link to='https://www.facebook.com/profile.php?id=100031937234961'>
          <FaFacebookSquare className="transition hover:scale-125" />
        </Link>
        <Link to='https://www.linkedin.com/in/wai-linn-aung-84052324a/'>
          <FaLinkedin className="transition hover:scale-125" />
        </Link>
        <Link to='https://github.com/WaiLinnAung16'>
          <FaGithubSquare className="transition hover:scale-125" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
