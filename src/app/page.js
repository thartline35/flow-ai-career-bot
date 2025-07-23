"use client";

import { useEffect, useRef, useState } from "react";
import ChatThread from "../components/ChatThread";

const TIPS = [
  "Be specific about your interests, strengths, and values.",
  "Share both what you enjoy and what you dislike in work or study.",
  "Describe your ideal work environment or lifestyle.",
  "Ask follow-up questions to dig deeper into suggestions.",
  "Don't be afraid to mention unconventional skills or passions!",
];

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTips, setShowTips] = useState(false);
  const chatThreadRef = useRef(null);

  useEffect(() => {
    if (chatThreadRef.current) {
      chatThreadRef.current.scrollTop = chatThreadRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setError("");
    
    // Add user message to local state
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input,
      createdAt: new Date().toISOString(),
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    
    try {
      console.log('Sending request to /api/test with:', { userInput: input });
      const res = await fetch("/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userInput: input,
          history: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });
      
      console.log('Response status:', res.status);
      const data = await res.json();
      console.log('Response data:', data);
      
      if (res.ok) {
        // Add assistant message to local state
        const assistantMessage = {
          id: Date.now() + 1,
          role: "assistant",
          content: data.message,
          createdAt: new Date().toISOString(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        setError(data.error || `API error: ${res.status}`);
      }
    } catch (err) {
      console.error('Network error details:', err);
      setError(`Network error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

    return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Main Chat Area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="w-full mb-8">
          <div className="relative flex flex-col items-center justify-center rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 mb-8 bg-white border border-[#E2E8F0]">
            {/* Animated Career Icon */}
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="animate-bounce-slow">
                <rect x="12" y="24" width="40" height="24" rx="6" fill="#2D3748" stroke="#D69E2E" strokeWidth="2" />
                <rect x="20" y="16" width="24" height="12" rx="4" fill="#D69E2E" stroke="#2D3748" strokeWidth="2" />
                <rect x="28" y="36" width="8" height="8" rx="2" fill="#F8FAFC" />
                <path d="M32 36v8" stroke="#2D3748" strokeWidth="2" />
                <g className="animate-shimmer">
                  <rect x="16" y="28" width="8" height="4" rx="2" fill="#F8FAFC" />
                  <rect x="40" y="28" width="8" height="4" rx="2" fill="#F8FAFC" />
                </g>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A202C] mb-4 text-center">Discover Your Unique Career Path</h1>
            <p className="text-xl sm:text-2xl text-[#1A202C] mb-3 font-medium text-center">with <span className="text-[#D69E2E] font-bold">Flow</span>, your AI career guidance assistant</p>
            <p className="text-lg sm:text-xl text-[#4A5568] text-center max-w-4xl mx-auto leading-relaxed">Flow helps you explore fulfilling career options based on your unique mix of interests, strengths, and personality traits—especially if you&apos;re a &ldquo;unicorn&rdquo; with broad skills!</p>
            {/* Tips Card Toggle */}
            <button
              className="absolute top-4 right-4 bg-[#D69E2E] hover:bg-[#B7791F] text-[#1A202C] font-bold rounded-full px-3 py-1 shadow transition"
              onClick={() => setShowTips((v) => !v)}
              aria-label="Show tips for best results"
            >
              {showTips ? "Hide Tips" : "Tips"}
            </button>
            {/* Tips Card */}
            {showTips && (
              <div className="absolute z-10 top-20 right-4 w-80 max-w-[90vw] bg-white border border-[#D69E2E] rounded-xl shadow-lg p-4 animate-fade-in-glass">
                <div className="flex items-center mb-2">
                  <svg width="24" height="24" fill="none" className="mr-2"><circle cx="12" cy="12" r="12" fill="#D69E2E" /><path d="M12 7v5l3 3" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span className="font-bold text-[#1A202C]">How to get the best results from Flow</span>
                </div>
                <ul className="list-disc pl-5 text-[#4A5568] text-sm space-y-1">
                  {TIPS.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Chat Card */}
        <div className="w-full flex flex-col h-[75vh] lg:h-[80vh] bg-white rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden">
          {/* Chat Thread */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6" ref={chatThreadRef}>
            <ChatThread messages={messages} status={loading ? "submitted" : "idle"} />
          </div>
          {/* Error Message */}
          {error && <div className="px-4 sm:px-6 text-red-600 mb-2 font-semibold animate-fade-in">{error}</div>}
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex gap-3 items-end p-4 sm:p-6 bg-[#F8FAFC] border-t border-[#E2E8F0]">
            <textarea
              className="flex-1 border border-[#E2E8F0] rounded-xl p-4 min-h-[56px] max-h-32 focus:ring-2 focus:ring-[#2D3748] focus:outline-none text-[#1A202C] resize-none transition-shadow duration-300 bg-white placeholder-[#4A5568] text-base"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Tell me about your interests, skills, or career goals..."
              disabled={loading}
              required
            />
            <button
              type="submit"
              className="bg-[#2D3748] text-white rounded-xl px-6 py-4 font-bold text-lg shadow-lg hover:bg-[#4A5568] transition-all duration-300 disabled:opacity-60 focus:ring-2 focus:ring-[#D69E2E] min-w-[100px]"
              disabled={loading || !input.trim()}
            >
              {loading ? (
                <svg className="animate-spin h-6 w-6 text-[#D69E2E] mx-auto" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
              ) : (
                <span>Send</span>
              )}
            </button>
          </form>
        </div>
        {/* Footer */}
        <footer className="mt-8 text-[#4A5568] text-xs sm:text-sm text-center animate-fade-in-glass">
          &copy; {new Date().getFullYear()} Flow Career Guidance. Crafted by Tammy Hartline.
        </footer>
        {/* Animations */}
        <style jsx global>{`
          .animate-fade-in-glass {
            animation: fadeInGlass 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          .animate-bounce-slow {
            animation: bounceSlow 2.5s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
          }
          .animate-shimmer {
            animation: shimmer 2s infinite linear;
          }
          @keyframes fadeInGlass {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounceSlow {
            0% { transform: translateY(0); }
            100% { transform: translateY(-8px); }
          }
          @keyframes shimmer {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
        `}</style>
      </main>
    </div>
  );
}
