import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUpload, FaComments } from "react-icons/fa";
const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
      isActive ? "bg-primary text-primary-content" : "hover:bg-base-300"
    }`;
  return (
    <aside className="min-h-[calc(100vh-65px)] w-72 border-r border-base-300 bg-base-100 p-4 hidden md:block">
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/upload" className={linkClass}>
          <FaUpload />
          <span>Upload Documents</span>
        </NavLink>

        <NavLink to="/chat" className={linkClass}>
          <FaComments />
          <span>Chat</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
