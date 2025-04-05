import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const SentimentChart = () => {
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Sentiment",
        data: [60, 30, 10],
        backgroundColor: ["#22c55e", "#e5e7eb", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ccc",
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-shadow">
      <h2 className="text-2xl font-bold text-white mb-4">Speaker Sentiment</h2>
      <Pie data={data} options={options} />
    </div>
  );
};