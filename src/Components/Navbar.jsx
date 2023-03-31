import React from "react";

const Navbar = () => {
  return (
    <div className=" py-5">
      <div className=" container mx-auto flex justify-between items-center">
        <h1>YinShote</h1>
        <ul className="flex items-center gap-3">
          <li>Home</li>
          <li>Movies</li>
          <li>TvShow</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
