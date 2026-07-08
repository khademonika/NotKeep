import { useState } from "react";
import FavoriteStar from "../components/FavoriteStar";
import TagPill from "../components/TagPill";
import { Search } from "lucide-react";
import { SUBJECTS } from "../data/static.data";
import FilterChip from "../components/FilterChip";


function SearchListItem({ note, onOpen, onToggleFavorite }) {
  return (
    <div
      onClick={() => onOpen(note)}
      role="button"
      tabIndex={0}
      className="flex w-full cursor-pointer flex-col items-start gap-2 rounded-2xl border border-[#E5E5E5] bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
    >
      <div className="flex w-full items-start justify-between gap-2">
        <h3 className="text-[14.5px] font-semibold text-[#1E1E1E]">{note.title}</h3>
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-[11px] text-[#9A988F]">{note.lastEdited}</span>
          <FavoriteStar
            active={note.favorite}
            onToggle={() => onToggleFavorite(note.id)}
          />
        </div>
      </div>
      <TagPill>{note.tag}</TagPill>
      <p className="line-clamp-2 text-[12.5px] leading-relaxed text-[#8A8880]">
        {note.preview}
      </p>
    </div>
  );
}

const SearchPage=({ notes, openNote, onToggleFavorite }) =>{
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = notes.filter((n) => {
    const matchesFilter = filter === "All" || n.tag === filter;
    const matchesQuery =
      query.trim() === "" ||
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.preview.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 md:px-8 md:py-8">
      <div className="mb-5 flex items-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white px-4 py-3.5">
        <Search className="h-4.5 w-4.5 text-[#9A988F]" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your notes..."
          className="w-full bg-transparent text-[14px] text-[#1E1E1E] placeholder:text-[#9A988F] focus:outline-none"
        />
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {SUBJECTS.map((s) => (
          <FilterChip key={s} label={s} active={filter === s} onClick={() => setFilter(s)} />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((note) => (
          <SearchListItem
            key={note.id}
            note={note}
            onOpen={openNote}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
        {filtered.length === 0 && (
          <p className="py-12 text-center text-[13px] text-[#9A988F]">
            No notes match your search.
          </p>
        )}
      </div>
    </div>
  );
}
export default SearchPage