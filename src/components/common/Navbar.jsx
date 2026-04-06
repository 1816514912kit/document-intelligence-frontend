import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-4 shadow-sm">
      <div className="flex-1">
        <h1 className="text-xl font-bold">DocIntel AI</h1>
      </div>
      <div className="flex-none">
        <button className="btn btn-sm btn-primary">Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
