import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import ChatBubble from "../components/ChatBubble";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "User", text: "What were the key decisions in this meeting?" },
    { sender: "AI", text: "The key decisions were to focus on mobile onboarding improvements and allocate Q2 budget toward retention campaigns." },
    { sender: "User", text: "Who is responsible for the onboarding audit?" },
    { sender: "AI", text: "Claire is assigned to prepare the onboarding UX audit report by April 10." },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newUserMsg = { sender: "User", text: input };
    const fakeReply = {
      sender: "AI",
      text: "This is a simulated AI response to your question."
    };
    setMessages([...messages, newUserMsg, fakeReply]);
    setInput("");
  };

  return (
    <SectionWrapper>
      <h2 className="text-3xl font-bold text-white mb-6">Chat with Your AI</h2>
      <div className="bg-white/5 p-6 rounded-xl text-gray-300 flex flex-col space-y-3 mb-6">
        {messages.map((msg, index) => (
          <ChatBubble key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-4 py-2 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-sm font-medium text-white"
        >
          Send
        </button>
      </div>
    </SectionWrapper>
  );
}
