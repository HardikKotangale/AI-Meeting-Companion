import React, { useState } from "react";
import { Video } from "lucide-react";

export const VideoUploader = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // Upload logic goes here
  };

  return (
    <div className="border border-gray-700 bg-neutral-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
      <label className="cursor-pointer block">
        <Video className="mx-auto h-12 w-12 text-purple-400 mb-3" />
        <p className="text-lg font-semibold mb-1">Upload Video</p>
        <p className="text-sm text-gray-400">MP4 format supported</p>
        <input type="file" accept="video/*" onChange={handleUpload} hidden />
      </label>
      {file && <p className="mt-3 text-green-400">Uploaded: {file.name}</p>}
    </div>
  );
};
