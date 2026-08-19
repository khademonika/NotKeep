import { useState } from "react";
import Sidebar from './components/Sidebar.jsx'
import TopNavbar from "./components/TopNavbar.jsx";
import Dashboard from "./Pages/Dashboard.jsx"
import SearchPage from "./Pages/SearchPage.jsx"
import ShowNotes from "./Pages/ShowNotes.jsx"
import ProfilePage from "./Pages/ProfilePage.jsx"
import SettingPage from "./Pages/SettingPage.jsx"
import TodoPage from "./Pages/TodoPage.jsx"
import api from "../api/axios.js";
import { Routes, Route } from 'react-router-dom'

import Note from "./Pages/Note.jsx"

import { NOTES } from "./data/static.data.js"
import CreateNote from "./Pages/CreateNote.jsx"
import LoginPage from "./Pages/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import { useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState(NOTES);
  const [activePage, setActivePage] = useState("dashboard");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileAIOpen, setMobileAIOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(NOTES[0].id);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState("landing");

  const selectedNote = notes.find((n) => n.id === selectedNoteId) || null;
  useEffect(() => {
    const testBackend = async () => {

      try {
        const res = await api.get("/test")
        console.log(res.data);

      } catch (error) {
        console.log("Error in connecting backend");

      }
    }
    testBackend()
  }, [])
  const toggleFavorite = (id) =>
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, favorite: !n.favorite } : n)));

  const openNote = (note) => {
    setSelectedNoteId(note.id);
    setActivePage("note-detail");
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setActivePage("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthView("landing");
  };

  if (!isAuthenticated) {
    if (authView === "login") {
      return (
        <LoginPage
          goLanding={() => setAuthView("landing")}
          goSignup={() => setAuthView("signup")}
          onLoginSuccess={handleAuthSuccess}
        />
      );
    }
    if (authView === "signup") {
      return (
        <SignupPage
          goLanding={() => setAuthView("landing")}
          goLogin={() => setAuthView("login")}
          onSignupSuccess={handleAuthSuccess}
        />
      );
    }
    return (
      <LandingPage goLogin={() => setAuthView("login")} goSignup={() => setAuthView("signup")} />
    );
  }

  return (
    <div className="flex h-screen w-full bg-[#FAF8F5] font-sans">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileOpen={mobileNavOpen}
        setMobileOpen={setMobileNavOpen}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopNavbar
          setMobileOpen={setMobileNavOpen}
          setActivePage={setActivePage}
          activePage={activePage}
        />

        {/* <div className="flex-1 overflow-y-auto">
          {activePage === "dashboard" && (
            <Dashboard
              notes={notes}
              setActivePage={setActivePage}
              openNote={openNote}
              openUploadModal={() => setUploadOpen(true)}
              onToggleFavorite={toggleFavorite}
            />
          )}
          {activePage === "create" && (
            <CreateNote mobileAIOpen={mobileAIOpen} setMobileAIOpen={setMobileAIOpen} />
          )}
          {activePage === "search" && (
            <SearchPage notes={notes} openNote={openNote} onToggleFavorite={toggleFavorite} />
          )}
          {activePage === "show" && (
            <ShowNotes notes={notes} openNote={openNote} onToggleFavorite={toggleFavorite} />
          )}
          {activePage === "note-detail" && (
            <Note
              note={selectedNote}
              onBack={() => setActivePage("show")}
              onToggleFavorite={toggleFavorite}
              mobileAIOpen={mobileAIOpen}
              setMobileAIOpen={setMobileAIOpen}
            />
          )}
          {activePage === "todo" && <TodoPage />}
          {activePage === "settings" && <SettingPage />}
          {activePage === "profile" && (
            <ProfilePage setActivePage={setActivePage} notes={notes} />
          )}
        </div> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard
            notes={notes}
            setActivePage={setActivePage}
            openNote={openNote}
            openUploadModal={() => setUploadOpen(true)}
            onToggleFavorite={toggleFavorite}
          />} />
          <Route path="/create" element={<CreateNote mobileAIOpen={mobileAIOpen} setMobileAIOpen={setMobileAIOpen}
          />} />
          <Route path="/search" element={<SearchPage notes={notes} openNote={openNote} onToggleFavorite={toggleFavorite} />} />
          <Route path="/show" element={<ShowNotes notes={notes} openNote={openNote} onToggleFavorite={toggleFavorite} />} />
          <Route path="/note" element={<Note
            note={selectedNote}
            onBack={() => setActivePage("show")}
            onToggleFavorite={toggleFavorite}
            mobileAIOpen={mobileAIOpen}
            setMobileAIOpen={setMobileAIOpen}
          />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/profile" element={<ProfilePage setActivePage={setActivePage} notes={notes} />} />



        </Routes>
      </div>

      {/* <UploadPDFModal open={uploadOpen} onClose={() => setUploadOpen(false)} /> */}
    </div>

  );
}