
import { BookOpen, Bot, Check, HelpCircle, Layers, Lightbulb, ListChecks, Paperclip, Plus, Wand2, X } from "lucide-react";
import { useRef, useState } from "react";
import TagPill from "../components/TagPill";
import Canva from "../components/Canva";
import MobileAISheet from "../components/MobileAISheet";
import AIAssistantPanel from "../components/AIassistantPanel";

const CREATE_CAPABILITIES = [
  { icon: BookOpen, label: "Summarize" },
  { icon: Lightbulb, label: "Explain" },
  { icon: Wand2, label: "Improve Writing" },
  { icon: HelpCircle, label: "Generate Quiz" },
  { icon: Layers, label: "Flashcards" },
  { icon: ListChecks, label: "Key Points" },
];

const CreateNotePage=({ mobileAIOpen, setMobileAIOpen })=> {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState(null);
  const [tagPickerOpen, setTagPickerOpen] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [body, setBody] = useState("");
  const [saved, setSaved] = useState(true);
  const fileInputRef = useRef(null);

  const markUnsaved = () => {
    setSaved(false);
    setTimeout(() => setSaved(true), 600);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    setAttachments((prev) => [...prev, ...files.map((f) => ({ name: f.name }))]);
    e.target.value = "";
  };

  const removeAttachment = (index) =>
    setAttachments((prev) => prev.filter((_, i) => i !== index));

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col md:flex-row">
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-10 md:py-8">
        <div className="mx-auto max-w-2xl">
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              markUnsaved();
            }}
            placeholder="Untitled note"
            className="w-full bg-transparent text-[38px] font-bold leading-tight text-[#1E1E1E] placeholder:text-[#C9C7BE] focus:outline-none"
          />

          <div className="relative mt-4 flex flex-wrap items-center gap-2">
            {tag ? (
              <TagPill>
                {tag}
                <button onClick={() => setTag(null)}>
                  <X className="h-2.5 w-2.5" />
                </button>
              </TagPill>
            ) : (
              <div className="group/tagbtn relative">
                <button
                  onClick={() => setTagPickerOpen((v) => !v)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-[#E5E5E5] text-[#8A8880] transition-colors duration-150 hover:border-[#1E1E1E]/30 hover:text-[#1E1E1E]"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
                <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1E1E1E] px-2 py-1 text-[10.5px] text-[#FAF8F5] opacity-0 transition-opacity duration-150 group-hover/tagbtn:opacity-100">
                  Add Tag
                </span>
                {tagPickerOpen && (
                  <div className="absolute left-0 top-9 z-20 w-40 rounded-xl border border-[#E5E5E5] bg-white p-1.5 shadow-lg">
                    {SUBJECTS.filter((s) => s !== "All").map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setTag(s);
                          setTagPickerOpen(false);
                        }}
                        className="flex w-full items-center rounded-lg px-2.5 py-1.5 text-left text-[12.5px] text-[#3D3D3A] hover:bg-[#F5F3EE]"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-[#E5E5E5] text-[#8A8880] transition-colors duration-150 hover:border-[#1E1E1E]/30 hover:text-[#1E1E1E]"
            >
              <Paperclip className="h-3.5 w-3.5" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".png,.jpg,.jpeg,.pdf,.docx,image/png,image/jpeg,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {attachments.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {attachments.map((file, i) => {
                const ext = file.name.split(".").pop().toLowerCase();
                const Icon = ["png", "jpg", "jpeg"].includes(ext) ? ImageIcon : FileIcon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl border border-[#E5E5E5] bg-[#F5F3EE] px-3 py-1.5 text-[12px] text-[#3D3D3A]"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#8A8880]" />
                    <span className="max-w-[140px] truncate">{file.name}</span>
                    <button onClick={() => removeAttachment(i)}>
                      <X className="h-3 w-3 text-[#9A988F] hover:text-[#1E1E1E]" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <div className="my-5 border-t border-[#E5E5E5]" />

          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              markUnsaved();
            }}
            placeholder="Start writing your thoughts..."
            className="h-[35vh] w-full resize-none bg-transparent text-[17px] leading-relaxed text-[#3D3D3A] placeholder:text-[#C9C7BE] focus:outline-none"
          />

          <div className="mb-2 flex items-center gap-1.5 text-[11.5px] text-[#9A988F]">
            {saved ? (
              <>
                <Check className="h-3 w-3" /> Saved
              </>
            ) : (
              "Saving..."
            )}
          </div>

          <Canva />
        </div>
      </div>

      <div className="hidden md:block md:w-[320px] md:shrink-0">
        <AIAssistantPanel
          capabilities={CREATE_CAPABILITIES}
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
          capabilities={CREATE_CAPABILITIES}
          chatPlaceholder="Ask AI about this note..."
          onClose={() => setMobileAIOpen(false)}
        />
      </MobileAISheet>
    </div>
  );
}

export default CreateNotePage