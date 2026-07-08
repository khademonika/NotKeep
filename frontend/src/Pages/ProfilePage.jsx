import { ArrowLeft, BadgeCheck, Camera, Check, ChevronRight, Mail, Pencil, User } from "lucide-react";
import { useState } from "react";
import SettingsSection from "../components/SettingsSection";
import SettingsRow from "../components/SettingsRow";

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#E5E5E5] bg-white px-4 py-3.5 text-center">
      <p className="text-[19px] font-semibold text-[#1E1E1E]">{value}</p>
      <p className="mt-0.5 text-[11.5px] text-[#9A988F]">{label}</p>
    </div>
  );
}

const ProfilePage=({ setActivePage, notes })=> {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Alex Carter");
  const [bio, setBio] = useState(
    "Computer science student. Taking notes on everything from quantum physics to weekend meal prep."
  );

  const totalNotes = notes.length;
  const favoriteCount = notes.filter((n) => n.favorite).length;
  const subjectCount = new Set(notes.map((n) => n.tag)).size;

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 md:px-8 md:py-8">
      <button
        onClick={() => setActivePage("dashboard")}
        className="mb-6 flex items-center gap-1.5 text-[12.5px] font-medium text-[#8A8880] hover:text-[#1E1E1E]"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Dashboard
      </button>

      <div className="mb-6 rounded-2xl border border-[#E5E5E5] bg-white p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1E1E1E] text-[22px] font-semibold text-[#FAF8F5]">
              AX
            </div>
            <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#F5F3EE] text-[#4A4A47] hover:bg-[#E5E5E5]">
              <Camera className="h-3.5 w-3.5" />
            </button>
          </div>

          {editing ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-1 rounded-lg border border-[#E5E5E5] px-3 py-1.5 text-center text-[17px] font-semibold text-[#1E1E1E] focus:outline-none"
            />
          ) : (
            <div className="mb-1 flex items-center gap-1.5">
              <h2 className="text-[19px] font-semibold text-[#1E1E1E]">{name}</h2>
              <BadgeCheck className="h-4 w-4 text-[#4A4A47]" />
            </div>
          )}

          <p className="mb-4 flex items-center gap-1.5 text-[12.5px] text-[#9A988F]">
            <Mail className="h-3.5 w-3.5" /> alex.carter@email.com
          </p>

          {editing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full resize-none rounded-xl border border-[#E5E5E5] p-3 text-center text-[13px] leading-relaxed text-[#4A4A47] focus:outline-none"
              rows={3}
            />
          ) : (
            <p className="max-w-md text-[13px] leading-relaxed text-[#5B5A55]">{bio}</p>
          )}

          <button
            onClick={() => setEditing((v) => !v)}
            className="mt-5 flex items-center gap-2 rounded-xl bg-[#1E1E1E] px-4 py-2 text-[12.5px] font-medium text-[#FAF8F5] hover:opacity-90"
          >
            {editing ? (
              <>
                <Check className="h-3.5 w-3.5" /> Save profile
              </>
            ) : (
              <>
                <Pencil className="h-3.5 w-3.5" /> Edit profile
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-3">
        <StatCard label="Notes" value={totalNotes} />
        <StatCard label="Favourites" value={favoriteCount} />
        <StatCard label="Subjects" value={subjectCount} />
      </div>

      <SettingsSection title="Personal info">
        <SettingsRow
          icon={User}
          label="Full name"
          description={name}
          control={<ChevronRight className="h-4 w-4 text-[#9A988F]" />}
        />
        <SettingsRow
          icon={Mail}
          label="Email address"
          description="alex.carter@email.com"
          control={<ChevronRight className="h-4 w-4 text-[#9A988F]" />}
        />
      </SettingsSection>
    </div>
  );
}

export default ProfilePage