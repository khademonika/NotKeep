import { Clock, Sparkles } from "lucide-react";
import TagPill from "./TagPill";
import FavoriteStar from "./FavoriteStar";

function NoteCard({ note, onOpen, onToggleFavorite }) {
  return (
    <div
      onClick={() => onOpen(note)}
      role="button"
      tabIndex={0}
      className="group flex cursor-pointer flex-col items-start rounded-2xl border border-[#E5E5E5] bg-white p-4 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="mb-3 flex w-full items-start justify-between gap-2">
        <TagPill>{note.tag}</TagPill>
        <div className="flex items-center gap-2">
          {note.aiSummary && (
            <span className="flex items-center gap-1 rounded-full bg-[#1E1E1E] px-2 py-0.5 text-[10px] font-medium text-[#FAF8F5]">
              <Sparkles className="h-2.5 w-2.5" /> AI Summary
            </span>
          )}
          <FavoriteStar
            active={note.favorite}
            onToggle={() => onToggleFavorite(note.id)}
          />
        </div>
      </div>
      <h3 className="mb-1 text-[14.5px] font-semibold leading-snug text-[#1E1E1E]">
        {note.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-[12.5px] leading-relaxed text-[#8A8880]">
        {note.preview}
      </p>
      <div className="mt-auto flex items-center gap-1.5 text-[11.5px] text-[#9A988F]">
        <Clock className="h-3 w-3" />
        {note.lastEdited}
      </div>
    </div>
  );
}


export default NoteCard