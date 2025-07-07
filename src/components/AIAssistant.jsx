// components/AIAssistant.jsx
import React, { useState } from "react";
import "./AIAssistant.css"; // Styling separately

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="ai-assistant-container">
        {isOpen && (
          <div className="ai-panel">
            <div className="ai-header">
              <strong>AI Assistant</strong>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
            <div className="ai-body">
              <p>How can I help you?</p>
              <textarea placeholder="Ask your question..." rows={3}></textarea>
              <button className="send-btn">Send</button>
            </div>
          </div>
        )}

        <button className="ai-button" onClick={() => setIsOpen(!isOpen)}>
          <span>AI </span>
        </button>
      </div>
    </>
  );
}
