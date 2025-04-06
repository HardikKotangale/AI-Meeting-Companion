import { useEffect, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import Spinner from "../components/Spinner";

export default function SummaryPage() {
  const [summary, setSummary] = useState("");
  const [actionItems, setActionItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch("/meeting_summaries/meeting1.txt");
        const fileText = await res.text();

        const prompt = `
You are a meeting assistant AI. Use ONLY the transcript below.
Do not make assumptions.

-----
${fileText}
-----

Please:
1. Write a detailed summary.
2. Extract a checklist of action items in this format:

Summary:
<summary>

Checklist:
- Task: <task>
  Owner: <name>
  Due: <due date>
  Status: <Pending | Completed | Overdue>
  Notes: <optional note>
`;

        const response = await fetch("http://localhost:11434/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: "llama3", prompt, stream: false }),
        });

        const data = await response.json();
        const full = data.response?.trim() || "";

        const summaryMatch = full.match(/Summary:\s*([\s\S]*?)Checklist:/i);
        const checklistMatch = full.match(/Checklist:\s*([\s\S]*)$/i);

        const parsedSummary =
          summaryMatch?.[1]?.trim() || "⚠️ No summary found.";
        const checklistRaw = checklistMatch?.[1]?.trim() || "";

        const items = checklistRaw
          .split("- Task:")
          .slice(1)
          .map((block) => {
            const task = block.match(/^(.*)/)?.[1]?.trim() || "";
            const owner =
              block.match(/Owner:\s*(.*)/)?.[1]?.trim() || "Unassigned";
            const due =
              block.match(/Due:\s*(.*)/)?.[1]?.trim() || "No due date";
            const status =
              block.match(/Status:\s*(.*)/)?.[1]?.trim() || "Pending";
            const notes = block.match(/Notes:\s*(.*)/)?.[1]?.trim() || "";
            return { task, owner, due, status, notes };
          });

        setTimeout(() => {
          setSummary(parsedSummary);
          setActionItems(items);
          setLoading(false);
        }, 10000);
      } catch (err) {
        console.error("Summary fetch failed:", err);
        setSummary("⚠️ Failed to fetch summary.");
        setActionItems([]);
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading) return <Spinner />;

  return (
    <SectionWrapper className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Meeting Summary</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 p-6 rounded-xl text-gray-300 whitespace-pre-wrap border border-white/10"
        >
          {summary}
        </motion.div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Action Items</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {actionItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 p-5 rounded-2xl shadow-lg border border-white/10 hover:scale-[1.01] transition-all"
            >
              <div className="flex items-start justify-between">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.task}
                </h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    item.status === "Completed"
                      ? "bg-green-600/20 text-green-400"
                      : item.status === "Overdue"
                      ? "bg-red-600/20 text-red-400"
                      : "bg-blue-600/20 text-blue-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="text-sm text-gray-300 space-y-1">
                <p>
                  <span className="text-gray-400">👤 Owner:</span>{" "}
                  <span className="font-medium text-white">{item.owner}</span>
                </p>
                <p>
                  <span className="text-gray-400">📅 Due:</span>{" "}
                  <span className="font-medium text-white">{item.due}</span>
                </p>
                {item.notes && (
                  <p>
                    <span className="text-gray-400">📝 Notes:</span>{" "}
                    {item.notes}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
