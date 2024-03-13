import React, { useState } from "react";
import "../styles/Chatbot.css";

function Chatbot() {
  const [openBot, setOpenBot] = useState(false);

  const toggleChatbot = () => {
    setOpenBot(!openBot);
  };

  return (
    <button
      id="chatbot"
      className="chatbot-button"
      aria-label="Chatbot Button"
      onClick={toggleChatbot}
    >
      {" "}
      chat
      <iframe
        id={openBot ? "open" : "close"}
        title="DialogFlow ChatBot"
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/ad8407f6-f2a2-4420-aaf5-c298a309863d"
      ></iframe>
    </button>
  );
}

export default Chatbot;
