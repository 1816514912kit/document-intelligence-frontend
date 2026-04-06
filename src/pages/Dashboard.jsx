import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-base-content/70">
          Manage documents and explore insights
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Total Documents</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Processed</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Chats</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h3 className="card-title">Recent Documents</h3>
          <p className="text-base-content/70">No documents uploaded yet.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
