import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import TranscriptPage from "./pages/TranscriptPage";
import SummaryPage from "./pages/SummaryPage";
import ChatPage from "./pages/ChatPage";
import "./styles/global.css";

function App() {
  const [meetingUploaded, setMeetingUploaded] = useState(() => {
    // initialize state from localStorage to persist across refreshes
    return localStorage.getItem("meetingUploaded") === "true";
  });

  useEffect(() => {
    localStorage.setItem("meetingUploaded", meetingUploaded);
  }, [meetingUploaded]);

  return (
    <Router>
      <main className="min-h-screen font-sans text-white bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
        <Navbar meetingUploaded={meetingUploaded} />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/upload"
            element={<UploadPage onUpload={() => setMeetingUploaded(true)} />}
          />

          <Route
            path="/transcript"
            element={
              meetingUploaded ? (
                <TranscriptPage />
              ) : (
                <Navigate to="/upload" replace />
              )
            }
          />

          <Route
            path="/summary"
            element={
              meetingUploaded ? (
                <SummaryPage />
              ) : (
                <Navigate to="/upload" replace />
              )
            }
          />

          <Route
            path="/chat"
            element={
              meetingUploaded ? (
                <ChatPage />
              ) : (
                <Navigate to="/upload" replace />
              )
            }
          />

          {/* fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
