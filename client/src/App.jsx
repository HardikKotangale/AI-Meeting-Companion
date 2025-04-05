import React from "react";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";

function App() {
  return (
    <main className="bg-black min-h-screen text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-lg z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-tight text-white">AI Meeting Companion</h1>
          <ul className="flex gap-6 text-sm text-gray-300">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#upload" className="hover:text-white transition">Upload</a></li>
            <li><a href="#transcript" className="hover:text-white transition">Transcript</a></li>
            <li><a href="#summary" className="hover:text-white transition">Insights</a></li>
            <li><a href="#chat" className="hover:text-white transition">Chat</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
          Your Smart AI Meeting Companion
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mt-6 max-w-xl">
          Upload your meeting recording. Ask anything. Get instant insights.
        </p>
        <a href="#upload" className="mt-10 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:scale-105 transition-all">
          Start Now
        </a>
      </section>

      {/* Dashboard */}
      <section id="upload" className="scroll-mt-20">
        <Dashboard />
      </section>
    </main>
  );
}

export default App;
