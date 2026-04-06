import React from "react";

const NotFound = () => {
  <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
    <div className="text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-3 text-base-content/70">Page not found</p>
      <Link to="/" className="btn btn-primary mt-5">
        Go to Login
      </Link>
    </div>
  </div>;
};

export default NotFound;
