export default function ChatPage() {
    const messages = [
      { sender: "User", text: "What were the key decisions in this meeting?" },
      { sender: "AI", text: "The key decisions were to focus on mobile onboarding improvements and allocate Q2 budget toward retention campaigns." },
      { sender: "User", text: "Who is responsible for the onboarding audit?" },
      { sender: "AI", text: "Claire is assigned to prepare the onboarding UX audit report by April 10." },
    ];
  
    return (
      <section className="min-h-screen p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Chat with Your AI</h2>
        <div className="bg-white/5 p-6 rounded-xl text-gray-300 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`text-sm ${msg.sender === "AI" ? "text-blue-400" : "text-white"}`}>
              <span className="font-semibold">{msg.sender}:</span> {msg.text}
            </div>
          ))}
        </div>
      </section>
    );
  }
  