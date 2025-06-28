"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [fullstack, setFullstack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [backendCode, setBackendCode] = useState("");
  const [frontendCode, setFrontendCode] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBackendCode("");
    setFrontendCode("");
    setInstructions("");

    try {
      const res = await fetch("https://yfnd-backend.onrender.com/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, fullstack }),
      });

      const data = await res.json();
      setBackendCode(data.response || "");
      setFrontendCode(data.frontend_response || "");
      setInstructions(data.deployment_instructions || "");
    } catch (error) {
      alert("Something went wrong. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Your Friendly Neighborhood Developer
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="w-full p-4 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <label className="flex items-center space-x-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={fullstack}
            onChange={(e) => setFullstack(e.target.checked)}
            className="w-4 h-4"
          />
          <span>Generate Fullstack (Backend + Frontend)</span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          {loading ? "Generating..." : "Generate Code"}
        </button>
      </form>

      {backendCode && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">🔧 Backend Code</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto whitespace-pre-wrap text-sm">
            {backendCode}
          </pre>
        </section>
      )}

      {frontendCode && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">🎨 Frontend Code</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto whitespace-pre-wrap text-sm">
            {frontendCode}
          </pre>
        </section>
      )}

      {instructions && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">🚀 Deployment Instructions</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto whitespace-pre-wrap text-sm">
            {instructions}
          </pre>
        </section>
      )}
    </main>
  );
}
