import React from "react";
import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  return (
    <div className="card bg-base-100 shadow-md min-h-[500px]">
      <div className="card-body flex flex-col justify-between">
        <div className="space-y-4 overflow-y-auto">
          <MessageBubble
            role="assistant"
            content="Hi! Ask anything about your uploaded documents."
          />
          <MessageBubble role="user" content="Summarize my uploaded files." />
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
  );
};

export default ChatWindow;
