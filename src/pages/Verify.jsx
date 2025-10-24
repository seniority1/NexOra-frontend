import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Verify() {
  const { token } = useParams(); // Get token from URL
  const [message, setMessage] = useState("Verifying your account...");
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/verify/${token}`
        );
        setMessage(res.data.message || "✅ Email verified successfully!");
        setStatus("success");
      } catch (err) {
        setMessage(
          err.response?.data?.message ||
            "❌ Verification failed. Token may be invalid or expired."
        );
        setStatus("error");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Account Verification</h2>
      <div
        className={`p-6 rounded-lg ${
          status === "loading"
            ? "bg-yellow-500/30"
            : status === "success"
            ? "bg-green-500/30"
            : "bg-red-500/30"
        }`}
      >
        <p className="text-lg">{message}</p>
      </div>

      {status === "success" && (
        <a
          href="/"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Go to Homepage
        </a>
      )}
    </div>
  );
}
