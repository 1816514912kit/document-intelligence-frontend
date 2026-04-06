import React from "react";
import { motion } from "framer-motion";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import SourcePanel from "../components/chat/SourcePanel";
import ChatWindow from "../components/chat/ChatWindow";
const ChatPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <DashboardHeader
        title="Chat With Documents"
        subtitle="Ask grounded questions using content from your uploaded documents"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <SourcePanel />
        </div>

        <div className="lg:col-span-3">
          <ChatWindow />
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPage;
