
function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-1.5 text-[12.5px] font-medium transition-colors duration-150 ${
        active
          ? "border-[#1E1E1E] bg-[#1E1E1E] text-[#FAF8F5]"
          : "border-[#E5E5E5] bg-white text-[#5B5A55] hover:bg-[#F5F3EE]"
      }`}
    >
      {label}
    </button>
  );
}

export default FilterChip