import React from "react";
import { motion } from "framer-motion";

const UploadDocuments = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold">Upload Documents</h2>
        <p className="text-base-content/70">
          Upload PDF, DOCX, PPT, and other supported files
        </p>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <div className="border-2 border-dashed border-primary/40 rounded-2xl p-10 text-center bg-base-200">
            <h3 className="text-xl font-semibold">Drag and drop files here</h3>
            <p className="text-base-content/70 mt-2">
              or click below to browse files
            </p>
            <button className="btn btn-primary mt-4">Choose Files</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UploadDocuments;
