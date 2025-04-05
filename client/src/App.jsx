import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import UploadPage from "./pages/Upload";
import TranscriptPage from "./pages/Transcript";
import SummaryPage from "./pages/Summary";
import ChatPage from "./pages/Chat";
import "./styles/global.css";

function App() {
  const [meetingUploaded, setMeetingUploaded] = useState(false);

  return (
    <Router>
      <main className="bg-black min-h-screen text-white font-sans relative">
        {/* Sticky Nav Progress Bar */}
        <nav className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-lg font-semibold tracking-wide">AI Meeting Companion</h1>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/" className="hover:text-gray-300 transition">Home</Link>
              <Link to="/upload" className="hover:text-gray-300 transition">1. Upload</Link>
              {meetingUploaded && (
                <>
                  <Link to="/transcript" className="hover:text-gray-300 transition">2. Transcript</Link>
                  <Link to="/summary" className="hover:text-gray-300 transition">3. Summary</Link>
                  <Link to="/chat" className="hover:text-gray-300 transition">4. Chat</Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage onUpload={() => setMeetingUploaded(true)} />} />
            <Route path="/transcript" element={meetingUploaded ? <TranscriptPage /> : <Navigate to="/upload" replace />} />
            <Route path="/summary" element={meetingUploaded ? <SummaryPage /> : <Navigate to="/upload" replace />} />
            <Route path="/chat" element={meetingUploaded ? <ChatPage /> : <Navigate to="/upload" replace />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;