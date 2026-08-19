import { useState } from "react";
import FavoriteStar from "../components/FavoriteStar";
import TagPill from "../components/TagPill";
import { Search } from "lucide-react";
import { SUBJECTS } from "../data/static.data";
import FilterChip from "../components/FilterChip";

function getFilteredLibraryNotes(notes, filterMode, selectedTagFilter, query) {
  let list = notes;
  if (filterMode === "recent") list = list.filter((n) => n.daysAgo <= 1);
  else if (filterMode === "favourite") list = list.filter((n) => n.favorite);
  else if (filterMode === "tag" && selectedTagFilter)
    list = list.filter((n) => n.tag === selectedTagFilter);

  if (query.trim()) {
    list = list.filter(
      (n) =>
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.preview.toLowerCase().includes(query.toLowerCase())
    );
  }
  return list;
}

function groupLibraryNotes(list, groupBy) {
  if (groupBy === "tag") {
    const order = SUBJECTS.filter((s) => s !== "All");
    return order
      .map((tag) => ({ label: tag, items: list.filter((n) => n.tag === tag) }))
      .filter((g) => g.items.length > 0);
  }
  if (groupBy === "created") {
    const sorted = [...list].sort((a, b) => a.createdRank - b.createdRank);
    const map = {};
    sorted.forEach((n) => {
      map[n.createdDate] = map[n.createdDate] || [];
      map[n.createdDate].push(n);
    });
    return Object.entries(map).map(([label, items]) => ({ label, items }));
  }
  const sorted = [...list].sort((a, b) => a.updatedRank - b.updatedRank);
  const map = {};
  sorted.forEach((n) => {
    map[n.updatedDate] = map[n.updatedDate] || [];
    map[n.updatedDate].push(n);
  });
  return Object.entries(map).map(([label, items]) => ({ label, items }));
}

function LibraryNoteCard({ note, onOpen, onToggleFavorite }) {
  return (
    <div
      onClick={() => onOpen(note)}
      role="button"
      tabIndex={0}
      className="group flex cursor-pointer flex-col items-start rounded-2xl border border-[#E5E5E5] bg-white p-4 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="mb-3 flex w-full items-start justify-between gap-2">
        <TagPill >{note.tag}</TagPill>
        <FavoriteStar 
          active={note.favorite}
          onToggle={() => onToggleFavorite(note.id)}
        />
      </div>
      <h3 className="mb-3 text-[14.5px] font-semibold leading-snug text-[#1E1E1E]">
        {note.title}
      </h3>
      <div className="mt-auto flex w-full items-center justify-between text-[11px] text-[#9A988F]">
        <span>Created {note.createdDate}</span>
        <span>Updated {note.updatedDate}</span>
      </div>
    </div>
  );
}

const ShowNotes=({ notes, openNote, onToggleFavorite }) =>{
  const [query, setQuery] = useState("");
  const [filterMode, setFilterMode] = useState("all");
  const [selectedTagFilter, setSelectedTagFilter] = useState("Physics");
  const [groupBy, setGroupBy] = useState("updated");

  const filtered = getFilteredLibraryNotes(notes, filterMode, selectedTagFilter, query);
  const groups = groupLibraryNotes(filtered, groupBy);
  const tagOptions = SUBJECTS.filter((s) => s !== "All");

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-[20px] font-semibold text-[#1E1E1E]">Notes Library</h1>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-[#9A988F]">Group by</span>
          <select
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value)}
            className="rounded-full border border-[#E5E5E5] bg-white px-3 py-1.5 text-[12px] font-medium text-[#4A4A47] focus:outline-none"
          >
            <option value="updated">Date Updated</option>
            <option value="created">Date Created</option>
            <option value="tag">Tag</option>
          </select>
        </div>
      </div>

      <div className="mb-5 flex items-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white px-4 py-3.5">
        <Search className="h-4.5 w-4.5 text-[#9A988F]" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your notes..."
          className="w-full bg-transparent text-[14px] text-[#1E1E1E] placeholder:text-[#9A988F] focus:outline-none"
        />
      </div>

      <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
        <FilterChip label="All Notes" active={filterMode === "all"} onClick={() => setFilterMode("all")} />
        <FilterChip label="Recent" active={filterMode === "recent"} onClick={() => setFilterMode("recent")} />
        <FilterChip
          label="Favourite"
          active={filterMode === "favourite"}
          onClick={() => setFilterMode("favourite")}
        />
        <FilterChip label="By Tag" active={filterMode === "tag"} onClick={() => setFilterMode("tag")} />
      </div>

      {filterMode === "tag" && (
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {tagOptions.map((t) => (
            <FilterChip
              key={t}
              label={t}
              active={selectedTagFilter === t}
              onClick={() => setSelectedTagFilter(t)}
            />
          ))}
        </div>
      )}

      <div className={filterMode === "tag" ? "" : "mt-2"}>
        {groups.length === 0 && (
          <p className="py-12 text-center text-[13px] text-[#9A988F]">
            No notes match your filters.
          </p>
        )}
        {groups.map((group) => (
          <div key={group.label} className="mb-8">
            <h2 className="mb-3 text-[12.5px] font-semibold uppercase tracking-wide text-[#9A988F]">
              {group.label}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((note) => (
                <LibraryNoteCard
                  key={note.id}
                  note={note}
                  onOpen={openNote}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowNotes