
import {ArrowLeft, BookOpen, Bot, Edit3, HelpCircle, Lightbulb, Star, Wand2} from "lucide-react"
import TagPill from "../components/TagPill.jsx"
import AIAssistantPanel from "../components/AIassistantPanel.jsx";
import MobileAISheet from "../components/MobileAISheet.jsx";

const SHOW_CAPABILITIES = [
  { icon: BookOpen, label: "Summarize Note" },
  { icon: Lightbulb, label: "Explain Section" },
  { icon: Wand2, label: "Rewrite Content" },
  { icon: HelpCircle, label: "Generate Questions" },
];

const Note=({ note, onBack, onToggleFavorite, mobileAIOpen, setMobileAIOpen })=> {
  if (!note) return null;
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col md:flex-row">
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#8A8880] hover:text-[#1E1E1E]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Library
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleFavorite(note.id)}
                className="flex items-center gap-1.5 rounded-xl border border-[#E5E5E5] bg-white px-3 py-2 text-[12.5px] font-medium text-[#1E1E1E] hover:bg-[#F5F3EE]"
              >
                <Star
                  className={`h-3.5 w-3.5 ${
                    note.favorite ? "fill-[#1E1E1E] text-[#1E1E1E]" : "text-[#9A988F]"
                  }`}
                />
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-3.5 py-2 text-[12.5px] font-medium text-[#1E1E1E] hover:bg-[#F5F3EE]">
                <Edit3 className="h-3.5 w-3.5" /> Edit
              </button>
            </div>
          </div>

          <h1 className="mb-2 text-[26px] font-semibold leading-tight text-[#1E1E1E]">
            {note.title}
          </h1>
          <p className="mb-4 text-[11.5px] text-[#9A988F]">
            Created {note.createdDate} &middot; Updated {note.updatedDate}
          </p>

          <div className="mb-6">
            <TagPill>{note.tag}</TagPill>
          </div>

          <div className="whitespace-pre-line text-[14.5px] leading-relaxed text-[#3D3D3A]">
            {note.content}
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-[320px] md:shrink-0">
        <AIAssistantPanel
          capabilities={SHOW_CAPABILITIES}
          chatPlaceholder="Ask AI about this note..."
        />
      </div>

      <button
        onClick={() => setMobileAIOpen(true)}
        className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E1E1E] text-[#FAF8F5] shadow-lg md:hidden relative"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1E1E1E]/40" />
        <Bot className="relative h-5 w-5" />
      </button>
      <MobileAISheet open={mobileAIOpen} onClose={() => setMobileAIOpen(false)}>
        <AIAssistantPanel
          capabilities={SHOW_CAPABILITIES}
          chatPlaceholder="Ask AI about this note..."
          onClose={() => setMobileAIOpen(false)}
        />
      </MobileAISheet>
    </div>
  );
}

export default Note