import TranscriptPage from "../pages/TranscriptPage";
import SummaryPage from "../pages/SummaryPage";
import ChatPage from "../pages/ChatPage";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function AnalyticsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    localStorage.setItem("meetingUploaded", "false");
    navigate("/");
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10 text-sm px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">Transcodify</div>
        <div className="flex gap-6">
          <button onClick={handleBack} className="hover:text-gray-300">Back to Home</button>
        </div>
      </nav>

      <div className="pt-40 px-6">
        <section id="transcript" className="min-h-screen pb-20">
          <TranscriptPage />
        </section>

        <section id="summary" className="min-h-screen pb-20">
          <SummaryPage />
        </section>

        <section id="chat" className="min-h-screen pb-20">
          <ChatPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}
