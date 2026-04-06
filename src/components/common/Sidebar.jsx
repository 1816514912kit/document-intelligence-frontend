import { NavLink } from "react-router-dom";
import { FaHome, FaUpload, FaComments } from "react-icons/fa";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-primary text-primary-content shadow"
        : "hover:bg-base-300 text-base-content"
    }`;

  return (
    <aside className="hidden md:block w-72 min-h-[calc(100vh-65px)] border-r border-base-300 bg-base-100 p-4">
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
}

export default Sidebar;
