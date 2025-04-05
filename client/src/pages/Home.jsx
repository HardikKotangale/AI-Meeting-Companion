import SectionWrapper from "../components/SectionWrapper";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <SectionWrapper className="text-center flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white to-gray-400 text-transparent bg-clip-text">
          Your Smart AI Meeting Companion
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mt-6 max-w-2xl">
          Upload meeting recordings. Ask questions. Get transcripts, summaries, and action items — instantly.
        </p>
        <Link
          to="/upload"
          className="mt-10 px-8 py-3 bg-white text-black rounded-full text-base font-semibold hover:scale-105 transition-all shadow-md hover:shadow-2xl"
        >
          Start Now
        </Link>
      </SectionWrapper>

      <SectionWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">🎙️ Upload Audio/Video</h3>
          <p className="text-gray-400">Drop your meeting recordings and let our system do the rest.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">🧠 Instant Transcripts</h3>
          <p className="text-gray-400">View live transcripts with timestamps and speaker detection.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">🤖 AI Insights</h3>
          <p className="text-gray-400">Get summaries, action items, and chat with your meeting AI.</p>
        </div>
      </SectionWrapper>
    </div>
  );
}