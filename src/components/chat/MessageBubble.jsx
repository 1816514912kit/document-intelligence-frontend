import React from "react";

const MessageBubble = ({ role = "assistant", content = "", time = "" }) => {
  const isUser = role === "user";
  return (
    <div className={`chat ${isUser ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble max-w-[85%] whitespace-pre-wrap ${
          isUser ? "chat-bubble-primary" : "chat-bubble-secondary"
        }`}
      >
        {content}
      </div>
      {time && (
        <div className="chat-footer opacity-60 text-xs mt-1">{time}</div>
      )}
    </div>
  );
};

export default MessageBubble;
