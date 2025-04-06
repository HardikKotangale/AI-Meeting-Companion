import { useEffect, useRef, useState } from "react";
import TranscriptPage from "../pages/TranscriptPage";
import SummaryPage from "../pages/SummaryPage";
import ChatPage from "../pages/ChatPage";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function AnalyticsPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const transcriptRef = useRef(null);

  const handleBack = () => {
    localStorage.setItem("meetingUploaded", "false");
    navigate("/");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const scrollToTranscript = () => {
      if (transcriptRef.current) {
        transcriptRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    scrollToTranscript();
  }, []);

  return (
    <div className="bg-black text-white font-sans relative">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/70 flex items-center justify-center z-50">
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      <nav className="fixed top-0 z-40 w-full bg-black/80 backdrop-blur border-b border-white/10 text-sm px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">Nexora</div>

        <div className="flex gap-6">
          <button
            onClick={() => scrollToSection("transcript")}
            className="hover:text-gray-300"
          >
            Transcript
          </button>
          <button
            onClick={() => scrollToSection("summary")}
            className="hover:text-gray-300"
          >
            Summary
          </button>
          <button
            onClick={() => scrollToSection("chat")}
            className="hover:text-gray-300"
          >
            Chat
          </button>
          <button onClick={handleBack} className="hover:text-gray-300">
            Back to Home
          </button>
        </div>
      </nav>

      <div className="pt-40 px-6">
        <section
          id="transcript"
          ref={transcriptRef}
          className="min-h-screen pb-20"
        >
          <TranscriptPage setLoadingGlobal={setIsLoading} />
        </section>

        <section id="summary" className="min-h-screen pb-20">
          <SummaryPage setLoadingGlobal={setIsLoading} />
        </section>

        <section id="chat" className="min-h-screen pb-20">
          <ChatPage setLoadingGlobal={setIsLoading} />
        </section>
      </div>

      <Footer />
    </div>
  );
}
