import Logo from "./Logo.jsx"
import { Bot, ChevronDown, FilePlus2, FileText, Icon, LayoutDashboard, ListChecks, Search, Settings, X } from "lucide-react";
import { Link } from "react-router-dom";


function SidebarContent({ activePage, setActivePage, onNavigate }) {
  return (
    <div className="flex h-full flex-col justify-between py-5">
      <div>
       <Link to="/dashboard">
        <Logo/>
       </Link>
        <nav className="mt-8 flex flex-col gap-1 px-2">

          <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-150">
            <LayoutDashboard  className="h-[17px] w-[17px]" strokeWidth={2} />
             <Link to="/dashboard">Dashboard</Link>
          </button>
           <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-150">
             <FilePlus2 className="h-[17px] w-[17px]" strokeWidth={2} />
             <Link to="create">Create Note</Link>
          </button>
           <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-150">
             <Search className="h-[17px] w-[17px]" strokeWidth={2} />
             <Link to="search">Search Notes</Link>
          </button>
           <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-150">
             <FileText className="h-[17px] w-[17px]" strokeWidth={2} />
             <Link to="show">Show Notes</Link>
          </button>
           <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-150">
             <ListChecks className="h-[17px] w-[17px]" strokeWidth={2} />
             <Link to="todo">Todo</Link>
          </button>
        </nav>
      </div>

      <div className="flex flex-col gap-1 px-2">
        <div className="mb-2 border-t border-[#E5E5E5]" />
        <button className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#4A4A47] hover:bg-[#F0EDE6]">
          <span className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#1E1E1E] text-[10px] font-semibold text-[#FAF8F5]">
              A
            </div>
            Alex's Workspace
          </span>
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => {
            setActivePage("settings");
            onNavigate && onNavigate();
          }}
          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${
            activePage === "settings"
              ? "bg-[#1E1E1E] text-[#FAF8F5]"
              : "text-[#4A4A47] hover:bg-[#F0EDE6]"
          }`}
        >
         
         <Link to="settings">  <Settings className="h-[17px] w-[17px]" strokeWidth={2} /></Link>
        </button>
        <button
          onClick={() => {
            setActivePage("create");
            onNavigate && onNavigate();
          }}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#4A4A47] hover:bg-[#F0EDE6]"
        >
          <span className="relative flex h-[17px] w-[17px] items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1E1E1E]/20" />
            <Bot className="relative h-[17px] w-[17px]" strokeWidth={2} />
          </span>
          AI Assistant
        </button>
      </div>
    </div>
  );
}

const Sidebar=({ activePage, setActivePage, mobileOpen, setMobileOpen }) =>{
  return (
    <>
      <aside className="hidden md:flex md:w-[260px] md:shrink-0 md:flex-col md:border-r md:border-[#E5E5E5] md:bg-[#FAF8F5]">
        <SidebarContent activePage={activePage} setActivePage={setActivePage} />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 flex h-full w-[260px] flex-col bg-[#FAF8F5] shadow-xl animate-in slide-in-from-left duration-200">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-4 rounded-lg p-1.5 text-[#4A4A47] hover:bg-[#F0EDE6]"
            >
              <X className="h-4 w-4" />
            </button>
            <SidebarContent
              activePage={activePage}
              setActivePage={setActivePage}
              onNavigate={() => setMobileOpen(false)}
            />

          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar