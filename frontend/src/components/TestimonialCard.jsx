import { Quote } from "lucide-react";

function TestimonialCard({ quote, name, role }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6">
      <Quote className="mb-3 h-5 w-5 text-[#C9C7BE]" />
      <p className="mb-5 text-[13.5px] leading-relaxed text-[#3D3D3A]">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E1E1E] text-[11px] font-semibold text-[#FAF8F5]">
          {initials}
        </div>
        <div>
          <p className="text-[12.5px] font-semibold text-[#1E1E1E]">{name}</p>
          <p className="text-[11px] text-[#9A988F]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard