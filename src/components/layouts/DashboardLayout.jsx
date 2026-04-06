import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaUpload, FaComments } from "react-icons/fa";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
function DashboardLayout() {
  const mobileLinkClass = ({ isActive }) =>
    `flex flex-col items-center justify-center gap-1 flex-1 py-2 text-xs ${
      isActive ? "text-primary font-semibold" : "text-base-content/70"
    }`;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="flex pb-16 md:pb-0">
        <Sidebar />

        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-base-100 border-t border-base-300 flex z-50">
        <NavLink to="/dashboard" className={mobileLinkClass}>
          <FaHome size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/upload" className={mobileLinkClass}>
          <FaUpload size={18} />
          <span>Upload</span>
        </NavLink>

        <NavLink to="/chat" className={mobileLinkClass}>
          <FaComments size={18} />
          <span>Chat</span>
        </NavLink>
      </div>
    </div>
  );
}

export default DashboardLayout;
