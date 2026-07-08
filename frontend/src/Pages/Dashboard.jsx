import { ChevronRight, FileUp, Plus, Wand2 } from "lucide-react";
import NoteCard from "../components/NoteCard";
import FavoriteNoteCard from "../components/FavoriteStar";


function HeroActionButton({ icon: Icon, label, primary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-xl px-4 py-3 text-[13.5px] font-medium transition-all duration-150 ${
        primary
          ? "bg-[#1E1E1E] text-[#FAF8F5] hover:opacity-90"
          : "border border-[#E5E5E5] bg-white text-[#1E1E1E] hover:bg-[#F5F3EE]"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

const DashboardPage=({ notes, setActivePage, openNote, openUploadModal, onToggleFavorite })=> {
  const recent = notes.slice(0, 6);
  const favorites = notes.filter((n) => n.favorite);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
      <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-[#1E1E1E] md:text-[22px]">
          Good Morning, Alex
        </h1>
        <p className="mt-0.5 text-[12.5px] text-[#8A8880]">
          You have {notes.length} notes
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <HeroActionButton
          icon={Plus}
          label="Create Note"
          primary
          onClick={() => setActivePage("create")}
        />
        <HeroActionButton icon={FileUp} label="Upload PDF" onClick={openUploadModal} />
        <HeroActionButton
          icon={Wand2}
          label="Ask AI"
          onClick={() => setActivePage("create")}
        />
      </div>

      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-[#1E1E1E]">Recent Notes</h2>
          <button
            onClick={() => setActivePage("search")}
            className="flex items-center gap-1 text-[12.5px] font-medium text-[#8A8880] hover:text-[#1E1E1E]"
          >
            View all <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onOpen={openNote}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-[#1E1E1E]">Favourite Notes</h2>
        </div>
        {favorites.length === 0 ? (
          <p className="text-[12.5px] text-[#9A988F]">
            Star a note to see it here.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((note) => (
              <FavoriteNoteCard
                key={note.id}
                note={note}
                onOpen={openNote}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default DashboardPage