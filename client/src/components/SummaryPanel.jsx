import React from "react";

export const SummaryPanel = () => {
  const summary = `
  - Project kickoff completed
  - Stakeholder concerns about timeline
  - Next sprint to focus on UI polish
  - No blockers for current tasks
  `;

  return (
    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-shadow">
      <h2 className="text-2xl font-bold text-white mb-3">Meeting Summary</h2>
      <div className="whitespace-pre-wrap text-gray-300 text-base font-light leading-relaxed tracking-wide">
        {summary}
      </div>
    </div>
  );
};
