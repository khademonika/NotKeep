import { Star } from "lucide-react";

const FavoriteStar=({ active, onToggle })=> {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="shrink-0 rounded-full p-0.5 transition-transform duration-150 hover:scale-110"
    >
      <Star
        className={`h-4 w-4 ${
          active ? "fill-[#1E1E1E] text-[#1E1E1E]" : "text-[#C9C7BE]"
        }`}
      />
    </button>
  );
}

export default FavoriteStar