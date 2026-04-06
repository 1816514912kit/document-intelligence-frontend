import { motion } from "framer-motion";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import UploadDropzone from "../components/dashboard/UplaodDropzone";
function UploadDocuments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <DashboardHeader
        title="Upload Documents"
        subtitle="Upload files and prepare them for retrieval and grounded chat"
      />

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <UploadDropzone />
        </div>
      </div>
    </motion.div>
  );
}

export default UploadDocuments;
