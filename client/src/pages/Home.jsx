import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white font-sans pb-10">
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20 pb-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.2] text-white">
          Welcome to Nexora.
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mt-10 max-w-2xl">
        Turning raw conversations into clarity — transcripts, summaries, and AI chat in seconds.
        </p>

        {/* START BUTTON */}
        <div className="relative mt-20 flex items-center justify-center">
          <Link
            to="/upload"
            className="relative z-10 px-10 py-4 bg-white text-black rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
}
