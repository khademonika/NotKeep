
function TagPill({ children, tone = "default" }) {
  const tones = {
    default: "bg-[#F3F1EC] text-[#5B5A55] border-[#E5E5E5]",
    dark: "bg-[#1E1E1E] text-[#FAF8F5] border-[#1E1E1E]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export default TagPill