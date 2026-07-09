function StepCard({ number, icon: Icon, title, description }) {
  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E1E1E]">
        <Icon className="h-6 w-6 text-[#FAF8F5]" />
      </div>
      <span className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#9A988F]">
        Step {number}
      </span>
      <h3 className="mb-1.5 text-[15px] font-semibold text-[#1E1E1E]">{title}</h3>
      <p className="max-w-[220px] text-[13px] leading-relaxed text-[#8A8880]">{description}</p>
    </div>
  );
}


export default StepCard