function SettingsRow({ icon: Icon, label, description, control }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#F0EDE6] py-4 last:border-b-0">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE]">
          <Icon className="h-4 w-4 text-[#4A4A47]" />
        </div>
        <div>
          <p className="text-[13.5px] font-medium text-[#1E1E1E]">{label}</p>
          {description && (
            <p className="mt-0.5 text-[12px] text-[#9A988F]">{description}</p>
          )}
        </div>
      </div>
      {control}
    </div>
  );
}

export default SettingsRow