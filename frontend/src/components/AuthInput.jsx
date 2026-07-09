

function AuthInput({ icon: Icon, type = "text", placeholder, value, onChange, rightSlot }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-3.5 py-2.5 transition-colors duration-150 focus-within:border-[#1E1E1E]/40">
      <Icon className="h-4 w-4 shrink-0 text-[#9A988F]" />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-[13.5px] text-[#1E1E1E] placeholder:text-[#9A988F] focus:outline-none"
      />
      {rightSlot}
    </div>
  );
}


export default AuthInput