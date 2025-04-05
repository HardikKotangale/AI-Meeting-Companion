import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import TranscriptPage from "./pages/TranscriptPage";
import SummaryPage from "./pages/SummaryPage";
import ChatPage from "./pages/ChatPage";
import "./styles/global.css";

function App() {
  const [meetingUploaded, setMeetingUploaded] = useState(false);

  return (
    <Router>
      <main className="min-h-screen font-sans text-white bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
        <Navbar meetingUploaded={meetingUploaded} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage onUpload={() => setMeetingUploaded(true)} />} />
          <Route
            path="/transcript"
            element={<TranscriptPage isLocked={!meetingUploaded} />}
          />
          <Route
            path="/summary"
            element={<SummaryPage isLocked={!meetingUploaded} />}
          />
          <Route
            path="/chat"
            element={<ChatPage isLocked={!meetingUploaded} />}
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
