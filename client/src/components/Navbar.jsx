import { Link, useLocation } from "react-router-dom";

export default function Navbar({ meetingUploaded }) {
  const { pathname } = useLocation();

  const navLinks = [
    { label: "Home", path: "/", alwaysEnabled: true },
    { label: "Upload", path: "/upload", alwaysEnabled: true },
    { label: "Transcript", path: "/transcript", locked: true },
    { label: "Summary", path: "/summary", locked: true },
    { label: "Chat", path: "/chat", locked: true }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-b from-black/80 to-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl tracking-tight">
          Nexora
        </Link>
        <div className="flex items-center gap-4 text-sm">
          {navLinks.map(({ label, path, locked, alwaysEnabled }) => {
            const isAccessible = alwaysEnabled || meetingUploaded;
            const isActive = pathname === path;

            return (
              <Link
                key={path}
                to={isAccessible ? path : "#"}
                className={`transition px-2 py-1 rounded-md ${
                  isActive ? "text-blue-400" : isAccessible ? "hover:text-gray-300 text-white" : "text-gray-600 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!isAccessible) e.preventDefault();
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
