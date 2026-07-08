import { Sparkles } from "lucide-react";

const Logo=({ onClick }) =>{
  return (
    <button onClick={onClick} className="group flex items-center gap-2 px-2 text-left">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1E1E1E] transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_16px_rgba(30,30,30,0.35)]">
        <Sparkles className="h-4 w-4 text-[#FAF8F5] transition-transform duration-300 ease-out group-hover:scale-110" />
      </div>
      <span className="text-[15px] font-semibold tracking-tight text-[#1E1E1E]">
        AI NotKeep
      </span>
    </button>
  );
}

export default Logo