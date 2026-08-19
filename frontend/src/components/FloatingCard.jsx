function FloatingCard({ icon: Icon, label, style }) {
  return (
    <div
      style={style}
      className="absolute flex items-center gap-2 whitespace-nowrap rounded-xl border border-[#E5E5E5] bg-white px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1E1E1E]">
        <Icon className="h-3 w-3 text-[#FAF8F5]" />
      </div>
      <span className="text-[11.5px] font-medium text-[#1E1E1E]">{label}</span>
    </div>
  );
}

export default FloatingCard