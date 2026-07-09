
import { Eye, EyeOff, Layers, Loader2, Lock, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { BrowserMockup } from "../components/MockupContent";
import FloatingCard from "../components/FloatingCard";
import AuthInput from "../components/AuthInput";
import { FaGithub } from "react-icons/fa";

function GoogleMark() {
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4A4A47] text-[9px] font-bold text-white">
      G
    </span>
  );
}

const floatCss = `
@keyframes gentle-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
`;

function LoginPage({ goLanding, goSignup, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 900);
  };

  return (
    <div className="flex min-h-screen bg-[#FAF8F5]">
      <style>{floatCss}</style>

      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#1E1E1E] px-12 py-10 lg:flex">
        <button onClick={goLanding} className="flex items-center gap-2 text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FAF8F5]">
            <Sparkles className="h-4 w-4 text-[#1E1E1E]" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#FAF8F5]">
            AI NotKeep
          </span>
        </button>

        <div className="relative mx-auto w-full max-w-sm">
          <p className="mb-6 text-[22px] font-semibold leading-snug text-[#FAF8F5]">
            Your second brain, powered by AI.
          </p>
          <div className="relative">
            <BrowserMockup variant="dashboard" />
            <FloatingCard
              icon={Sparkles}
              label="AI Summary"
              style={{ top: -14, left: -10, animation: "gentle-float 4s ease-in-out infinite" }}
            />
            <FloatingCard
              icon={Layers}
              label="Flashcards"
              style={{
                bottom: -14,
                right: -10,
                animation: "gentle-float 4.6s ease-in-out infinite",
                animationDelay: "0.4s",
              }}
            />
          </div>
        </div>

        <p className="text-[11.5px] text-[#9A988F]">© 2026 AI NotKeep</p>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-4 py-10 lg:w-1/2">
        <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-400">
          <button onClick={goLanding} className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1E1E1E]">
              <Sparkles className="h-4 w-4 text-[#FAF8F5]" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-[#1E1E1E]">
              AI NotKeep
            </span>
          </button>

          <h1 className="mb-1.5 text-[24px] font-semibold text-[#1E1E1E]">Welcome back</h1>
          <p className="mb-8 text-[13px] text-[#8A8880]">
            Log in to keep building your second brain.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <AuthInput
              icon={Mail}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AuthInput
              icon={Lock}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-[#9A988F] hover:text-[#1E1E1E]"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />

            <div className="mb-1 mt-1 flex items-center justify-between">
              <label className="flex items-center gap-2 text-[12.5px] text-[#5B5A55]">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember((v) => !v)}
                  className="h-3.5 w-3.5 rounded border-[#E5E5E5] accent-[#1E1E1E]"
                />
                Remember me
              </label>
              <button type="button" className="text-[12.5px] font-medium text-[#4A4A47] hover:text-[#1E1E1E]">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1E1E1E] py-3 text-[13.5px] font-medium text-[#FAF8F5] transition-transform duration-150 hover:scale-[1.02] hover:opacity-90 disabled:opacity-70"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="text-[11px] font-medium uppercase tracking-wide text-[#9A988F]">Or</span>
            <div className="h-px flex-1 bg-[#E5E5E5]" />
          </div>

          <div className="flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-4 py-2.5 text-[12.5px] font-medium text-[#3D3D3A] hover:bg-[#F5F3EE]">
              <GoogleMark /> Google
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-4 py-2.5 text-[12.5px] font-medium text-[#3D3D3A] hover:bg-[#F5F3EE]">
              <FaGithub className="h-4 w-4" /> GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-[12.5px] text-[#8A8880]">
            Don't have an account?{" "}
            <button onClick={goSignup} className="font-medium text-[#1E1E1E] hover:underline">
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}


export default LoginPage