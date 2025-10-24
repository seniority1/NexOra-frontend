import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 🔗 Replace this with your Render backend API
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
        form
      );

      setMessage(res.data.message || "✅ Registration successful!");
    } catch (err) {
      setMessage(
        err.response?.data?.message || "❌ Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Create your NexOra account</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-left bg-white/20 p-6 rounded-xl"
      >
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md text-gray-900 outline-none"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md text-gray-900 outline-none"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md text-gray-900 outline-none"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
        >
          {loading ? "⏳ Registering..." : "Register"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm bg-white/20 py-2 px-4 rounded-md">{message}</p>
      )}
    </div>
  );
}
