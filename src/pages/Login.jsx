import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import AuthLayout from "../components/auth/AuthLayout";
import {
  authStart,
  authSuccess,
  authFailure,
} from "../components/redux/slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      dispatch(authStart());

      const dummyUser = {
        name: "Yogesh",
        email: formData.email,
      };

      const dummyToken = "dummy-jwt-token";

      dispatch(
        authSuccess({
          user: dummyUser,
          token: dummyToken,
        }),
      );

      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      dispatch(authFailure("Login failed"));
      toast.error("Something went wrong");
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to your document intelligence workspace"
    >
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="input input-bordered w-full"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Don’t have an account?{" "}
        <Link to="/register" className="link link-primary">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Login;
