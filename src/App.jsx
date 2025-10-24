import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Verify from "./pages/Verify.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2">🚀 NexOra</h1>
          <p className="text-lg opacity-90">
            Connect. Deploy. Control your bot like a pro 💫
          </p>
        </header>

        <nav className="flex gap-4 mb-6">
          <Link
            to="/"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Register
          </Link>
          <Link
            to="/verify/testtoken"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Verify
          </Link>
        </nav>

        <main className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/verify/:token" element={<Verify />} />
          </Routes>
        </main>

        <footer className="mt-6 text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} NexOra — Powered by{" "}
            <span className="text-blue-300">NexOra Dev</span>
          </p>
        </footer>
      </div>
    </Router>
  );
}
