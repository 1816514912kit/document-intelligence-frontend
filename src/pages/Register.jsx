import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 via-base-100 to-primary/20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card w-full max-w-md bg-base-100 shadow-2xl"
      >
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Create Account</h2>
          <p className="text-center text-base-content/70">
            Start uploading and chatting with your documents
          </p>

          <form className="space-y-4 mt-4">
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn btn-primary w-full">Register</button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
