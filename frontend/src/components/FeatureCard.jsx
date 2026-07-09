
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-[#E5E5E5] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F3EE] transition-colors duration-200 group-hover:bg-[#1E1E1E]">
        <Icon className="h-5 w-5 text-[#1E1E1E] transition-colors duration-200 group-hover:text-[#FAF8F5]" />
      </div>
      <h3 className="mb-1.5 text-[15px] font-semibold text-[#1E1E1E]">{title}</h3>
      <p className="text-[13px] leading-relaxed text-[#8A8880]">{description}</p>
    </div>
  );
}

export default FeatureCard