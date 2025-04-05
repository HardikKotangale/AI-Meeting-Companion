import React from "react";
import { AudioUploader } from "../components/AudioUploader";
import { VideoUploader } from "../components/VideoUploader";
import { LiveTranscription } from "../components/LiveTranscription";
import { SummaryPanel } from "../components/SummaryPanel";
import { ActionItems } from "../components/ActionItems";
import { SentimentChart } from "../components/SentimentChart";
import { ChatPanel } from "../components/ChatPanel";

const Dashboard = () => {
  return (
    <div className="p-6 sm:p-12 max-w-7xl mx-auto space-y-10 animate-fade-in">
      <header className="text-center space-y-2">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">AI Meeting Companion</h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Upload your meeting. Ask anything. Get actionable insights instantly.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <AudioUploader />
        <VideoUploader />
      </section>

      <LiveTranscription />

      <div className="grid lg:grid-cols-3 gap-6">
        <SummaryPanel />
        <ActionItems />
        <SentimentChart />
      </div>

      <ChatPanel />
    </div>
  );
};

export default Dashboard;
