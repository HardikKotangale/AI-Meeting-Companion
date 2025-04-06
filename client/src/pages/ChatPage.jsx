import { useEffect, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import ChatBubble from "../components/ChatBubble";
import Spinner from "../components/Spinner";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [transcriptLoaded, setTranscriptLoaded] = useState(false);

  useEffect(() => {
    const loadTranscript = async () => {
      try {
        const res = await fetch("/meeting_summaries/meeting1.txt");
        const fileText = await res.text();
        setTimeout(() => {
          setTranscript(fileText);
          setTranscriptLoaded(true);
        }, 10000); // ⏱️ 7-second delay
      } catch (err) {
        console.error("Failed to load transcript", err);
      }
    };

    loadTranscript();
  }, []);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newUserMsg = { sender: "User", text: input };
    setMessages((prev) => [...prev, newUserMsg]);
    setInput("");
    setLoading(true);

    try {
      const prompt = `
Use the following meeting transcript strictly as background context:

-----
${transcript}
-----

Answer the following question naturally and concisely without referring to the transcript itself:

"${input}"
`;

      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3",
          prompt,
          stream: false,
        }),
      });

      const data = await response.json();
      const aiMsg = {
        sender: "Nexora",
        text: data.response?.trim() || "⚠️ No response received.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Fetch error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "Nexora", text: "Something went wrong. Is Ollama running?" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!transcriptLoaded) return <Spinner />;

  return (
    <SectionWrapper>
      <h2 className="text-3xl font-bold text-white mb-6">
        Ask About the Meeting
      </h2>

      <div className="bg-white/5 p-6 rounded-xl text-gray-300 flex flex-col space-y-3 mb-6 max-h-[50vh] overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatBubble key={index} sender={msg.sender} text={msg.text} />
        ))}
        {loading && (
          <div className="text-sm text-blue-400 animate-pulse">
            Nexora is typing...
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
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
          className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-sm font-medium text-white disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </SectionWrapper>
  );
}
