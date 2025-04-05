export default function UploadPage({ onUpload }) {
    const handleFakeUpload = () => {
      setTimeout(() => {
        onUpload();
      }, 1000);
    };
  
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-br from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Upload Your Meeting
        </h2>
        <p className="text-gray-400 max-w-xl mb-6">
          Upload audio or video files to transcribe, analyze, and summarize with our AI companion.
        </p>
        <div className="w-full max-w-lg space-y-4">
          <div
            onClick={handleFakeUpload}
            className="cursor-pointer border border-dashed border-gray-500 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition text-gray-300"
          >
            🎙️ Click here to simulate upload of <strong>team-meeting.mp3</strong>
          </div>
          <div className="text-left text-sm text-gray-400">
            <p><span className="text-green-400">✔</span> File ready: <strong>team-meeting.mp3</strong></p>
            <p className="italic text-xs mt-1">* Once uploaded, you'll be redirected to the transcript page.</p>
          </div>
        </div>
      </section>
    );
  }
  