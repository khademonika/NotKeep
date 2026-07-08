
function SettingsSection({ title, children }) {
  return (
    <div className="mb-6 rounded-2xl border border-[#E5E5E5] bg-white px-5 py-2">
      <h3 className="border-b border-[#F0EDE6] py-3 text-[12.5px] font-semibold uppercase tracking-wide text-[#9A988F]">
        {title}
      </h3>
      {children}
    </div>
  );
}


export default SettingsSection