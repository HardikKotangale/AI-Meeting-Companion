import React, { useState, useEffect } from "react";

export const LiveTranscription = () => {
  const [transcript, setTranscript] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Simulate live typewriter effect
    const sampleText = "Welcome to your live transcription. This line is being typed word by word for that sleek Apple-style effect.";
    let index = 0;
    setTranscript("");
    setIsTyping(true);

    const interval = setInterval(() => {
      setTranscript((prev) => prev + sampleText[index]);
      index++;
      if (index >= sampleText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4">Live Transcription</h2>
      <div className="text-gray-100 font-mono text-lg whitespace-pre-wrap min-h-[120px]">
        {transcript}
        {isTyping && <span className="animate-pulse">|</span>}
      </div>
    </div>
  );
};
