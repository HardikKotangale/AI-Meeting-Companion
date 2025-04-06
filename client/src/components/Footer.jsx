export default function Footer() {
    return (
      <footer className="bg-black border-t border-white/10 text-gray-400 text-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Nexora. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  