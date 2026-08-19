import { Bell, CalendarDays, Menu } from "lucide-react";

const TopNavbar = ({ setMobileOpen, setActivePage, activePage })=> {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-[#E5E5E5] bg-[#FAF8F5]/95 px-4 py-3 backdrop-blur md:px-8 md:py-4">
      <button
        onClick={() => setMobileOpen(true)}
        className="rounded-lg p-2 text-[#1E1E1E] hover:bg-[#F0EDE6] md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden items-center gap-1.5 rounded-xl border border-[#E5E5E5] bg-white px-3 py-1.5 text-[12px] font-medium text-[#4A4A47] lg:flex">
          <CalendarDays className="h-3.5 w-3.5 text-[#8A8880]" />
          {today}
        </div>
        <button className="relative rounded-xl border border-[#E5E5E5] bg-white p-2 text-[#4A4A47] hover:bg-[#F5F3EE]">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#1E1E1E]" />
        </button>
        <button
          onClick={() => setActivePage("profile")}
          className={`flex h-9 w-9 items-center justify-center rounded-full bg-[#1E1E1E] text-[12px] font-semibold text-[#FAF8F5] transition-transform duration-150 hover:scale-105 ${
            activePage === "profile"
              ? "ring-2 ring-[#1E1E1E]/30 ring-offset-2 ring-offset-[#FAF8F5]"
              : ""
          }`}
        >
          AX
        </button>
      </div>
    </header>
  );
}


export default TopNavbar