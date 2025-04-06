import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import Spinner from "../components/Spinner";

export default function TranscriptPage() {
  const [transcript, setTranscript] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const res = await fetch("/meeting_summaries/meeting1.txt");
        if (!res.ok) throw new Error("Failed to load transcript");
        const text = await res.text();

        const lines = text.split("\n").filter((line) => line.trim() !== "");
        const parsed = lines.map((line) => {
          const parts = line.split(":");
          const speaker = parts[0].trim();
          const content = parts.slice(1).join(":").trim();
          return { speaker, text: content };
        });

        setTimeout(() => {
          setTranscript(parsed);
          setLoading(false);
        }, 7000); // ⏱ 7 seconds
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTranscript();
  }, []);


  if (loading) return <Spinner />;

  return (
    <SectionWrapper>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Transcript</h2>
      </div>

      {error ? (
        <p className="text-red-400">⚠️ {error}</p>
      ) : (
        <div className="bg-white/5 p-6 rounded-xl text-gray-200 font-mono leading-relaxed space-y-3 border border-white/10">
          {transcript.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="font-bold text-blue-400">{line.speaker}:</span>
              <span>{line.text}</span>
            </motion.div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
