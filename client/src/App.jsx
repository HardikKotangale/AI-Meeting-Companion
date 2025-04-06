import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/Home";
import AnalyticsPage from "./pages/Analytics";
import { AnimatePresence, motion } from "framer-motion";

function ProtectedRoute({ children }) {
  const meetingUploaded = localStorage.getItem("meetingUploaded") === "true";
  return meetingUploaded ? children : <Navigate to="/" replace />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <AnalyticsPage />
              </motion.div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen font-sans text-white bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
