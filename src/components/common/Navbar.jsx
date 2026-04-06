import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../redux/slices/AuthSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-4 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          DocIntel AI
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <button onClick={handleThemeToggle} className="btn btn-sm btn-outline">
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <div className="hidden md:block text-sm text-base-content/70">
          {user?.name ? `Hi, ${user.name}` : "Welcome"}
        </div>

        <button onClick={handleLogout} className="btn btn-sm btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
