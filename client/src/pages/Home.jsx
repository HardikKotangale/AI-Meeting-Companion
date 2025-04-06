import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import UploadPage from "../pages/UploadPage";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [meetingUploaded, setMeetingUploaded] = useState(() => {
    return localStorage.getItem("meetingUploaded") === "true";
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (meetingUploaded) {
      setTimeout(() => navigate("/analytics"), 300);
    }
  }, [meetingUploaded, navigate]);

  return (
    <div className="relative overflow-hidden bg-black text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10 text-sm px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">Transcodify</div>
        <div className="flex gap-6">
          <Link to="home" smooth duration={600} className="cursor-pointer hover:text-gray-300">Home</Link>
          <Link to="upload" smooth duration={600} className="cursor-pointer hover:text-gray-300">Upload</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 bg-black">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.2] text-white">
          Welcome to Transcodify.
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mt-10 max-w-2xl">
          Seamless distributed video transcoding tailored to optimal formats for every device.
        </p>

        {/* Animated Circular Glow Line */}
        <div className="relative mt-20 flex items-center justify-center">
          <div className="absolute w-[120px] h-[120px] rounded-full border border-cyan-500 animate-ping opacity-50"></div>
          <div className="absolute w-[160px] h-[160px] rounded-full border border-cyan-400 blur-lg animate-spin-slow"></div>
          <Link
            to="upload"
            smooth duration={600}
            className="relative z-10 px-10 py-4 bg-white text-black rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Start Now
          </Link>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className="min-h-screen flex items-center justify-center px-6 pb-20 bg-black">
        <div className="text-center max-w-2xl">
          <UploadPage onUpload={() => {
            setMeetingUploaded(true);
            localStorage.setItem("meetingUploaded", "true");
          }} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
