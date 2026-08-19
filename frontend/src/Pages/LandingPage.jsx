import { useState } from "react";
import Logo from "../components/Logo";
import BrowserMockup from "../components/MockupContent.jsx"
import { useRef } from "react";
import { ArrowRight, Bot, Edit3, FilePlus2, FileUp, GraduationCap, HelpCircle, Layers, ListChecks, Menu, PlayCircle, Sparkles } from "lucide-react";
import FloatingCard from "../components/FloatingCard.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import StepCard from "../components/StepCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";

function NavLinkAnim({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative text-[13px] font-medium text-[#4A4A47] transition-colors duration-200 hover:text-[#1E1E1E]"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#1E1E1E] transition-all duration-300 ease-out group-hover:w-full" />
    </button>
  );
}

const floatCss = `
@keyframes gentle-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
`;


function LandingPage({ goLogin, goSignup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const previewRef = useRef(null);
  const scrollToPreview = () =>
    previewRef.current && previewRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <style>{floatCss}</style>

      <header className="sticky top-0 z-40 border-b border-[#E5E5E5] bg-[#FAF8F5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
          <nav className="hidden items-center gap-8 md:flex">
            <NavLinkAnim onClick={scrollToPreview}>Features</NavLinkAnim>
            <NavLinkAnim onClick={() => {}}>Pricing</NavLinkAnim>
            <NavLinkAnim onClick={() => {}}>About</NavLinkAnim>
            <NavLinkAnim onClick={goLogin}>Login</NavLinkAnim>
            <button
              onClick={goSignup}
              className="rounded-xl bg-[#1E1E1E] px-4 py-2 text-[13px] font-medium text-[#FAF8F5] transition-transform duration-150 hover:scale-105 hover:opacity-90"
            >
              Get Started
            </button>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={goSignup}
              className="rounded-xl bg-[#1E1E1E] px-3.5 py-2 text-[12.5px] font-medium text-[#FAF8F5]"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-lg p-2 text-[#1E1E1E] hover:bg-[#F0EDE6]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-[#E5E5E5] bg-[#FAF8F5] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              <button
                onClick={scrollToPreview}
                className="rounded-lg px-3 py-2 text-left text-[13px] font-medium text-[#4A4A47] hover:bg-[#F0EDE6]"
              >
                Features
              </button>
              <button className="rounded-lg px-3 py-2 text-left text-[13px] font-medium text-[#4A4A47] hover:bg-[#F0EDE6]">
                Pricing
              </button>
              <button className="rounded-lg px-3 py-2 text-left text-[13px] font-medium text-[#4A4A47] hover:bg-[#F0EDE6]">
                About
              </button>
              <button
                onClick={goLogin}
                className="rounded-lg px-3 py-2 text-left text-[13px] font-medium text-[#4A4A47] hover:bg-[#F0EDE6]"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-xl animate-in fade-in slide-in-from-bottom-4 text-center duration-500 lg:text-left">
            <h1 className="text-[34px] font-bold leading-[1.1] text-[#1E1E1E] md:text-[46px]">
              Your Notes, Enhanced by AI
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-[#8A8880] md:text-[16px]">
              Capture ideas, organize knowledge, summarize documents, generate quizzes, and
              learn faster with AI-powered note taking.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <button
                onClick={goSignup}
                className="flex items-center gap-2 rounded-xl bg-[#1E1E1E] px-5 py-3 text-[13.5px] font-medium text-[#FAF8F5] transition-transform duration-150 hover:scale-105 hover:opacity-90"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={scrollToPreview}
                className="flex items-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-5 py-3 text-[13.5px] font-medium text-[#1E1E1E] hover:bg-[#F5F3EE]"
              >
                <PlayCircle className="h-4 w-4" /> Watch Demo
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
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
                bottom: 36,
                left: -24,
                animation: "gentle-float 4.5s ease-in-out infinite",
                animationDelay: "0.6s",
              }}
            />
            <FloatingCard
              icon={FileUp}
              label="PDF Upload"
              style={{
                top: 24,
                right: -18,
                animation: "gentle-float 4.2s ease-in-out infinite",
                animationDelay: "0.3s",
              }}
            />
            <FloatingCard
              icon={HelpCircle}
              label="Quiz Generator"
              style={{
                bottom: -14,
                right: -6,
                animation: "gentle-float 5s ease-in-out infinite",
                animationDelay: "0.9s",
              }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-semibold text-[#1E1E1E] md:text-[30px]">
            Everything you need to learn faster
          </h2>
          <p className="mt-2 text-[13.5px] text-[#8A8880]">
            A complete toolkit for capturing and mastering knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Edit3} title="Smart Notes" description="Create and organize notes effortlessly." />
          <FeatureCard icon={Sparkles} title="AI Summaries" description="Instant note summaries." />
          <FeatureCard icon={FileUp} title="PDF Intelligence" description="Upload PDFs and get insights." />
          <FeatureCard icon={HelpCircle} title="AI Quiz Generator" description="Generate study questions." />
          <FeatureCard icon={Layers} title="Flashcards" description="Turn notes into flashcards." />
          <FeatureCard icon={ListChecks} title="Todo Manager" description="Track daily tasks." />
        </div>
      </section>

      <section ref={previewRef} className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-semibold text-[#1E1E1E] md:text-[30px]">
            See it in action
          </h2>
          <p className="mt-2 text-[13.5px] text-[#8A8880]">
            A closer look at the AI NotKeep workspace.
          </p>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {[
            { variant: "dashboard", label: "Dashboard" },
            { variant: "create", label: "Create Note" },
            { variant: "ai", label: "AI Assistant" },
            { variant: "todo", label: "Todo" },
          ].map((p) => (
            <div
              key={p.variant}
              className="shrink-0 basis-[85%] snap-center transition-all duration-200 hover:-translate-y-1 sm:basis-[60%] lg:basis-auto"
            >
              <BrowserMockup variant={p.variant} />
              <p className="mt-3 text-center text-[12.5px] font-medium text-[#4A4A47]">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[26px] font-semibold text-[#1E1E1E] md:text-[30px]">
            How it works
          </h2>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <StepCard number="1" icon={FilePlus2} title="Create Notes" description="Write or upload content." />
          <StepCard number="2" icon={Bot} title="Let AI Process" description="Summarize, explain, and organize." />
          <StepCard number="3" icon={GraduationCap} title="Learn Faster" description="Generate quizzes and flashcards." />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-semibold text-[#1E1E1E] md:text-[30px]">
            Loved by students and professionals
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="AI NotKeep cut my study prep time in half. The quiz generator alone is worth it."
            name="Maya Chen"
            role="Grad Student"
          />
          <TestimonialCard
            quote="It finally feels like my notes and my AI tools live in the same place."
            name="Daniel Ortiz"
            role="Product Manager"
          />
          <TestimonialCard
            quote="Uploading a PDF and getting an instant summary has changed how I read papers."
            name="Priya Nair"
            role="Researcher"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="rounded-3xl bg-[#1E1E1E] px-6 py-14 text-center md:px-16">
          <h2 className="text-[26px] font-semibold text-[#FAF8F5] md:text-[32px]">
            Start Building Your Second Brain Today
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={goSignup}
              className="rounded-xl bg-[#FAF8F5] px-5 py-3 text-[13.5px] font-medium text-[#1E1E1E] transition-transform duration-150 hover:scale-105"
            >
              Create Free Account
            </button>
            <button
              onClick={goLogin}
              className="rounded-xl border border-[#FAF8F5]/30 px-5 py-3 text-[13.5px] font-medium text-[#FAF8F5] hover:bg-white/10"
            >
              Login
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5E5E5] px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
          <div className="flex flex-wrap items-center justify-center gap-6 text-[12.5px] text-[#8A8880]">
            <button className="hover:text-[#1E1E1E]">Product</button>
            <button onClick={scrollToPreview} className="hover:text-[#1E1E1E]">Features</button>
            <button className="hover:text-[#1E1E1E]">Privacy</button>
            <button className="hover:text-[#1E1E1E]">Terms</button>
            <button className="hover:text-[#1E1E1E]">Contact</button>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-center text-[11.5px] text-[#9A988F] sm:text-left">
          © 2026 AI NotKeep. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage