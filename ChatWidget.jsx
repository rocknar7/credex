import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: "user", text: userInput },
        { sender: "bot", text: "Processing your request..." },
      ];
      setMessages(newMessages);
      setUserInput("");

      setTimeout(() => {
        const botReply = "Here's a response to your query";
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, prevMessages.length - 1),
          { sender: "bot", text: botReply },
        ]);
      }, 1500);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chat-widget ${isOpen ? "open" : ""} shadow-lg p-3 mb-5 bg-light rounded`}>
      <div className="chat-header bg-primary text-white p-2 text-center cursor-pointer" onClick={toggleChat}>
        Chat with us!
      </div>

      {isOpen && (
        <div className="chat-body p-2">
          <div className="messages overflow-auto mb-3">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender} mb-2`}>
                <div className={msg.sender === "user" ? "text-end" : "text-start"}>{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="input-area d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="btn btn-primary ms-2" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
