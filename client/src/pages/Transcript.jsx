export default function TranscriptPage() {
    const dummyTranscript = [
      { time: "00:00", speaker: "Alice", text: "Welcome everyone. Let's get started with the Q2 planning meeting." },
      { time: "00:15", speaker: "Bob", text: "Sure. We exceeded our targets in Q1, so that’s great news." },
      { time: "00:30", speaker: "Alice", text: "Awesome. Let’s review product priorities for the next quarter." },
      { time: "00:45", speaker: "Claire", text: "We should definitely focus on user retention in mobile onboarding." },
      { time: "01:00", speaker: "Bob", text: "Agreed. Also, marketing budget discussions are pending." }
    ];
  
    return (
      <section className="min-h-screen p-8">
        <h2 className="text-3xl font-bold mb-6 text-white">Live Transcript</h2>
        <div className="bg-white/5 p-6 rounded-xl text-gray-200 font-mono leading-relaxed space-y-2">
          {dummyTranscript.map((line, index) => (
            <div key={index}>
              <span className="text-sm text-gray-500">[{line.time}]</span>{" "}
              <span className="font-bold text-blue-400">{line.speaker}:</span>{" "}
              <span>{line.text}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  