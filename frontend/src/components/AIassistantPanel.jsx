import { Bot, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";

function AICapabilityButton({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-3 py-2.5 text-left text-[12.5px] font-medium text-[#3D3D3A] transition-colors duration-150 hover:border-[#1E1E1E]/20 hover:bg-[#F5F3EE]"
    >
      <Icon className="h-3.5 w-3.5 shrink-0 text-[#1E1E1E]" />
      {label}
    </button>
  );
}

function AIAssistantPanel({ capabilities, chatPlaceholder, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "Here's a quick take based on your note — let me know if you'd like me to go deeper on any part.",
        },
      ]);
    }, 500);
  };

  return (
    <div className="flex h-full flex-col bg-white md:border-l md:border-[#E5E5E5]">
      <div className="flex items-center justify-between border-b border-[#E5E5E5] px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-[#1E1E1E]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-lg bg-[#1E1E1E]/40" />
            <Bot className="relative h-3.5 w-3.5 text-[#FAF8F5]" />
          </span>
          <span className="text-[14px] font-semibold text-[#1E1E1E]">
            AI Assistant
          </span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#8A8880] hover:bg-[#F5F3EE] md:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 px-4 py-4">
        {capabilities.map((cap) => (
          <AICapabilityButton key={cap.label} {...cap} />
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5F3EE]">
              <Sparkles className="h-4 w-4 text-[#9A988F]" />
            </div>
            <p className="text-[12.5px] text-[#9A988F]">
              Ask me anything about this note.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 pb-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-[#1E1E1E] text-[#FAF8F5]"
                    : "bg-[#F5F3EE] text-[#3D3D3A]"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-[#E5E5E5] p-3">
        <div className="flex items-center gap-2 rounded-xl border border-[#E5E5E5] bg-[#FAF8F5] px-3 py-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder={chatPlaceholder}
            className="w-full bg-transparent text-[13px] text-[#1E1E1E] placeholder:text-[#9A988F] focus:outline-none"
          />
          <button
            onClick={send}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1E1E1E] text-[#FAF8F5] transition-opacity hover:opacity-90"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}



export default AIAssistantPanel