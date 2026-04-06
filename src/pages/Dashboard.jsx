import { motion } from "framer-motion";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DocumentCard from "../components/dashboard/DocumentCard";
function Dashboard() {
  const mockDocuments = [
    {
      id: 1,
      name: "Q1 Financial Report.pdf",
      type: "PDF",
      status: "Ready",
      size: "1.8 MB",
      uploadedAt: "2 hours ago",
    },
    {
      id: 2,
      name: "Team Strategy Deck.pptx",
      type: "PPTX",
      status: "Processing",
      size: "3.2 MB",
      uploadedAt: "30 minutes ago",
    },
    {
      id: 3,
      name: "Meeting Notes.docx",
      type: "DOCX",
      status: "Ready",
      size: "420 KB",
      uploadedAt: "Yesterday",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <DashboardHeader
        title="Dashboard"
        subtitle="Manage your documents and interact with grounded AI answers"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Total Documents</h3>
            <p className="text-3xl font-bold">{mockDocuments.length}</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Processed</h3>
            <p className="text-3xl font-bold">
              {mockDocuments.filter((doc) => doc.status === "Ready").length}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Chats</h3>
            <p className="text-3xl font-bold">4</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Recent Documents</h3>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mockDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              name={doc.name}
              type={doc.type}
              status={doc.status}
              size={doc.size}
              uploadedAt={doc.uploadedAt}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
