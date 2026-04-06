import React from "react";
import { motion } from "framer-motion";
const ChatPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold">Chat With Documents</h2>
        <p className="text-base-content/70">
          Ask grounded questions based on uploaded content
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-md lg:col-span-1">
          <div className="card-body">
            <h3 className="card-title">Sources</h3>
            <p className="text-sm text-base-content/70">
              Selected documents will appear here.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md lg:col-span-3 min-h-[500px]">
          <div className="card-body justify-between">
            <div>
              <h3 className="card-title">Conversation</h3>
              <p className="text-base-content/70 mt-2">
                No messages yet. Ask your first question.
              </p>
            </div>

            <div className="flex gap-2 mt-6">
              <input
                type="text"
                placeholder="Ask something about your documents..."
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPage;
