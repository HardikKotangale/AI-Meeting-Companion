import React, { useState } from "react";
import { Send } from "lucide-react";

export const ChatPanel = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! Ask me anything about your meeting." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Replace with your API call
    const aiResponse = {
      sender: "ai",
      text: "This is a placeholder response from the AI based on your question: '" + input + "'.",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, aiResponse]);
    }, 500);
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 space-y-4 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-2">AI Meeting Chat</h2>
      <div className="max-h-80 overflow-y-auto space-y-2 pr-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`px-4 py-2 rounded-xl max-w-[80%] ${
              msg.sender === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "mr-auto bg-neutral-700 text-gray-100"
            } animate-fade-in`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 rounded-xl px-4 py-2 bg-neutral-800 text-white border border-neutral-700 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
        >
          <Send className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
