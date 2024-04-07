import React from "react";
import circledot from "../assets/dot.png";

function Navbar() {
  return (
    <div className="px-8">
      <div className="navbar bg-base-200 border border-base-300 rounded-md">
        <div className="flex-1">
          <img className="h-5" src={circledot} alt="" />
          <a className="btn btn-ghost text-xl">Issue</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
