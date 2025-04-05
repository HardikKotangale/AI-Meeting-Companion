import React from "react";

export const ActionItems = () => {
  const items = [
    { task: "Finalize UI mockups", assignee: "🧑‍🎨 Maya", status: "In Progress" },
    { task: "Send API documentation", assignee: "📨 Arjun", status: "Pending" },
    { task: "Schedule sprint review", assignee: "📅 Elena", status: "Done" },
  ];

  return (
    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-shadow">
      <h2 className="text-2xl font-bold text-white mb-4">Action Items</h2>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-white/5 p-3 rounded-xl text-sm text-gray-200 hover:bg-white/10 transition-all"
          >
            <div>
              <p className="font-medium">{item.task}</p>
              <span className="text-xs text-gray-400">Assigned to: {item.assignee}</span>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.status === "Done"
                  ? "bg-green-600 text-white"
                  : item.status === "In Progress"
                  ? "bg-yellow-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
