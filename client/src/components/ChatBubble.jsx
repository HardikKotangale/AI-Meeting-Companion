import { motion } from "framer-motion";

export default function ChatBubble({ sender, text }) {
  const isAI = sender === "AI";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`max-w-xl w-fit px-5 py-3 my-2 rounded-2xl shadow-md text-sm leading-relaxed ${
        isAI
          ? "bg-white/10 text-blue-300 self-start"
          : "bg-blue-600 text-white self-end"
      }`}
    >
      <span className="block text-xs text-gray-400 mb-1 font-medium">
        {sender}
      </span>
      {text}
    </motion.div>
  );
}