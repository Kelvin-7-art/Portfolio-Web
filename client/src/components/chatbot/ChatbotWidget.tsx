import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Send,
  X,
  Bot,
  Sparkles,
  User,
  Minimize2,
} from "lucide-react";

type Role = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: Role;
  content: string;
};

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uid(),
      role: "assistant",
      content: "Hi! Ask me anything about Kelvin’s portfolio 🙂",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const historyForApi = useMemo(
    () => messages.slice(-10).map(({ role, content }) => ({ role, content })),
    [messages]
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isOpen) return;
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || isTyping) return;

    // add user message
    setMessages((prev) => [
      ...prev,
      { id: uid(), role: "user", content: trimmed },
    ]);

    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: historyForApi,
        }),
      });

      const data: { reply?: string; error?: string } = await res
        .json()
        .catch(() => ({}));

      if (!res.ok) throw new Error(data?.error || `Request failed (${res.status})`);

      const reply = String(data?.reply ?? "").trim();

      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: reply || "I didn’t get a response back—please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: "Sorry—something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = inputValue;
    setInputValue("");
    await sendMessage(content);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((v) => !v)}
        className={`
          fixed bottom-6 right-6 z-[9999] p-4 rounded-full shadow-2xl
          ${isOpen ? "bg-secondary text-white" : "bg-primary text-primary-foreground"}
          transition-colors duration-300
        `}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] md:h-[600px] z-[9999] flex flex-col bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-background/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Bot size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">
                    KelvinAI
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors text-muted-foreground hover:text-white"
                aria-label="Minimize chat"
              >
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length <= 1 && (
                <div className="text-center mt-12 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <h4 className="text-white font-medium">How can I help you?</h4>
                  <p className="text-sm text-muted-foreground px-6">
                    Ask me about my projects, skills, or experience.
                  </p>

                  <div className="grid grid-cols-1 gap-2 mt-6 px-2">
                    {[
                      "Tell me about your projects",
                      "What are your main skills?",
                      "How can I contact you?",
                    ].map((suggestion: string) => (
                      <button
                        key={suggestion}
                        onClick={() => void sendMessage(suggestion)}
                        className="text-sm bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg p-2.5 text-left transition-colors text-muted-foreground hover:text-white"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg: ChatMessage, i: number) => (
                <motion.div
                  key={msg.id ?? `${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center shrink-0
                      ${
                        msg.role === "user"
                          ? "bg-secondary text-white"
                          : "bg-primary/20 text-primary"
                      }
                    `}
                  >
                    {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  <div
                    className={`
                      max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap
                      ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-white/5 text-slate-200 border border-white/5 rounded-tl-none"
                      }
                    `}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.2s]" />
                    <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.1s]" />
                    <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-background border-t border-white/5"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground rounded-xl p-2.5 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
