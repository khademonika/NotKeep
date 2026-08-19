function MobileAISheet({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end md:hidden">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 h-[78vh] w-full rounded-t-3xl bg-white shadow-2xl animate-in slide-in-from-bottom duration-200">
        <div className="flex justify-center pt-2.5">
          <div className="h-1 w-10 rounded-full bg-[#E5E5E5]" />
        </div>
        <div className="h-[calc(100%-16px)]">{children}</div>
      </div>
    </div>
  );
}


export default MobileAISheet