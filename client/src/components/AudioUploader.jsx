import React, { useState } from "react";
import { CloudUpload } from "lucide-react";

export const AudioUploader = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // Upload logic goes here
  };

  return (
    <div className="border border-gray-700 bg-neutral-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
      <label className="cursor-pointer block">
        <CloudUpload className="mx-auto h-12 w-12 text-blue-400 mb-3" />
        <p className="text-lg font-semibold mb-1">Upload Audio</p>
        <p className="text-sm text-gray-400">MP3, WAV formats supported</p>
        <input type="file" accept="audio/*" onChange={handleUpload} hidden />
      </label>
      {file && <p className="mt-3 text-green-400">Uploaded: {file.name}</p>}
    </div>
  );
};
