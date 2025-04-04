"use client";

import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaComments, FaUser, FaTimes } from "react-icons/fa";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AzureChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Chat Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 bg-[#5ECDEF] text-white p-4 rounded-full shadow-lg hover:bg-[#5ECDEF] transition-colors z-[1000]"
      >
        <FaComments className="w-6 h-6" />
      </button>

      {/* Animated Chat Window */}
      <div
        className={`fixed bottom-20 right-4 w-96 h-[600px] bg-gradient-to-b from-black via-[#1E1B4B] to-[#2A276D] rounded-lg shadow-xl flex flex-col z-[1000] origin-bottom-right transition-all duration-300 ease-out transform ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-b from-[#5ECDEF] to-[#0077B6] text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <FaComments className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">Swyft</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-[#4DB8D3] text-gray-900"
                    : "bg-[#d1d1d1] text-gray-800"
                }`}
              >
                <div className="flex items-start">
                  {message.role === "user" ? (
                    <FaUser className="w-5 h-5 mr-2 mt-1" />
                  ) : (
                    <FaComments className="w-5 h-5 mr-2 mt-1" />
                  )}
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#555555] text-white rounded-lg p-3">
                <div className="flex items-center">
                  <FaComments className="w-5 h-5 mr-2" />
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-[#5ECDEF] text-white p-2 rounded-lg hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AzureChatbot;
