import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SummaryPage() {
  const summary = `The Q2 planning meeting focused on reviewing Q1 achievements, discussing product direction for the next quarter, and prioritizing improvements in user retention and mobile onboarding. Marketing initiatives and budget allocations were also discussed.`;

  const actionItems = [
    { task: "Prepare onboarding UX audit report", owner: "Claire", due: "April 10" },
    { task: "Allocate marketing budget for Q2 campaigns", owner: "Bob", due: "April 15" },
    { task: "Schedule team sync on product roadmap", owner: "Alice", due: "April 12" }
  ];

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
        <div className="grid gap-6 md:grid-cols-2">
          {actionItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition"
            >
              <CheckCircle className="text-green-400 mt-1" size={20} />
              <div className="text-gray-300">
                <p className="font-medium">{item.task}</p>
                <p className="text-sm text-gray-400">{item.owner} • Due {item.due}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
