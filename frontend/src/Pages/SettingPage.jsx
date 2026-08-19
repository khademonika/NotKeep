import { Moon, Palette } from "lucide-react";
import SettingsRow from "../components/SettingsRow";
import SettingsSection from "../components/SettingsSection";


const SettingPage =()=> {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("Classic");

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 md:px-8 md:py-8">
      <h1 className="mb-6 text-[20px] font-semibold text-[#1E1E1E]">Settings</h1>

      <SettingsSection title="Appearance">
        <SettingsRow
          icon={Moon}
          label="Dark mode"
          description="Switch the workspace to a darker palette"
          control={<Toggle checked={darkMode} onChange={setDarkMode} />}
        />
        <SettingsRow
          icon={Palette}
          label="Theme"
          description="Choose the accent style for your workspace"
          control={
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="rounded-full border border-[#E5E5E5] bg-[#FAF8F5] px-3 py-1.5 text-[11.5px] font-medium text-[#5B5A55] focus:outline-none"
            >
              <option>Classic</option>
              <option>Slate</option>
              <option>Sand</option>
            </select>
          }
        />
      </SettingsSection>
    </div>
  );
}

export default SettingPage