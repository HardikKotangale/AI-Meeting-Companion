import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

export default function UploadPage({ onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const handleFakeUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setDone(true);
      onUpload(); // set parent state
      setTimeout(() => {
        navigate("/transcript"); // redirect after short delay
      }, 1000);
    }, 3000);
  };

  return (
    <SectionWrapper className="text-center flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-br from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Upload Your Meeting
      </h2>
      <p className="text-gray-400 max-w-xl mb-6">
        Upload your video file to transcribe, analyze, and summarize with our AI companion.
      </p>

      {!uploading && !done && (
        <motion.div
          onClick={handleFakeUpload}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer border border-dashed border-gray-500 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition text-gray-300"
        >
          🎙️ Click here to simulate upload of <strong></strong>
        </motion.div>
      )}

      {uploading && (
        <div className="w-full max-w-md mt-6">
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-blue-400 rounded-full"
            />
          </div>
          <p className="mt-2 text-sm text-gray-400">Uploading file...</p>
        </div>
      )}

      {done && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-green-400 mt-6"
        >
          ✅ Upload complete. Redirecting...
        </motion.div>
      )}
    </SectionWrapper>
  );
}
