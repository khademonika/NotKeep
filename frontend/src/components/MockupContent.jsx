
export default function DashboardMockupContent() {
  return (
    <div className="space-y-3">
      <div className="h-3 w-24 rounded bg-[#1E1E1E]/80" />
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-14 rounded-lg border border-[#E5E5E5] bg-[#FAF8F5]" />
        ))}
      </div>
      <div className="h-2 w-full rounded bg-[#F0EDE6]" />
      <div className="h-2 w-4/5 rounded bg-[#F0EDE6]" />
    </div>
  );
}

function CreateMockupContent() {
  return (
    <div className="space-y-3">
      <div className="h-4 w-32 rounded bg-[#1E1E1E]" />
      <div className="h-2 w-full rounded bg-[#F0EDE6]" />
      <div className="h-2 w-full rounded bg-[#F0EDE6]" />
      <div className="h-2 w-2/3 rounded bg-[#F0EDE6]" />
      <div className="mt-3 h-16 rounded-lg border border-dashed border-[#E5E5E5]" />
    </div>
  );
}

function AIMockupContent() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-md bg-[#1E1E1E]" />
        <div className="h-2 w-20 rounded bg-[#F0EDE6]" />
      </div>
      <div className="ml-auto h-8 w-2/3 rounded-xl bg-[#1E1E1E]/90" />
      <div className="h-8 w-3/4 rounded-xl bg-[#F5F3EE]" />
    </div>
  );
}

function TodoMockupContent() {
  return (
    <div className="space-y-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg border border-[#E5E5E5] px-2 py-1.5"
        >
          <div className="h-3 w-3 rounded border border-[#C9C7BE]" />
          <div className="h-2 flex-1 rounded bg-[#F0EDE6]" />
        </div>
      ))}
    </div>
  );
}

 export  function BrowserMockup({ variant = "dashboard", className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-[#E5E5E5] bg-[#FAF8F5] px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
      </div>
      <div className="p-4">
        {variant === "dashboard" && <DashboardMockupContent />}
        {variant === "create" && <CreateMockupContent />}
        {variant === "ai" && <AIMockupContent />}
        {variant === "todo" && <TodoMockupContent />}
      </div>
    </div>
  );
}

