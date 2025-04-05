import React from "react";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white to-gray-400 text-transparent bg-clip-text">
          Your Smart AI Meeting Companion
        </h1>
        <p className="text-lg sm:text-xl text-gray-400">
          Upload your meeting audio or video. Get instant transcripts, summaries, action items, and chat with your meeting AI.
        </p>
        <a
          href="/upload"
          className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-full text-base font-semibold hover:scale-105 transition-all shadow-md hover:shadow-xl"
        >
          Get Started
        </a>
      </div>
      <div className="mt-16 max-w-4xl w-full px-4">
        <img
          src="https://www.apple.com/v/home/ay/images/promos/macos/promo_macos__f8olmx1xzvqa_large.jpg"
          alt="Hero Visual"
          className="rounded-3xl shadow-xl object-cover w-full"
        />
      </div>
    </section>
  );
}
