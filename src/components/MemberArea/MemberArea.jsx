import React, { useState } from "react";
import "./MemberArea.scss";
import MediaLibrary from "../MediaLibrary/MediaLibrary";
import Calendar from "../Calendar/Calendar";
import Countdown from "../Countdown/Countdown";
import Auth from "../Auth/Auth";
import useUserRole from "../../hooks/useUserRole";
import UploadForm from "../UploadForm/UploadForm";
import { auth } from "../../config/firebase";
import { Navigate } from "react-router-dom"; // 🔑 import pour redirection
import { signOut } from "firebase/auth";

export default function MemberArea() {
  const [activeTab, setActiveTab] = useState("profil");
  const [nextEventDate, setNextEventDate] = useState("2025-12-01");
  const { role, loading } = useUserRole();

  const user = auth.currentUser;

  // 🔑 Si pas connecté → redirection vers /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="member-area">
      <h2>Espace Membre</h2>
      <button onClick={() => signOut(auth)}>Se déconnecter</button>
      {/* Onglets */}
      <div className="tabs">
        <button 
          className={activeTab === "profil" ? "active" : ""} 
          onClick={() => setActiveTab("profil")}
        >
          Profil
        </button>
        <button 
          className={activeTab === "mediatheque" ? "active" : ""} 
          onClick={() => setActiveTab("mediatheque")}
        >
          Médiathèque
        </button>
        <button 
          className={activeTab === "calendrier" ? "active" : ""} 
          onClick={() => setActiveTab("calendrier")}
        >
          Calendrier
        </button>
      </div>

      {/* Contenu des onglets */}
      <div className="tab-content">
        {activeTab === "profil" && (
          <div className="profil">
            <h3>Mon Profil</h3>
            <p>Email : {user.email}</p>
            <p>Rôle : {role || "Non défini"}</p>
            {role === "admin" && <p>👑 Vous êtes administrateur, accès complet.</p>}
            {role === "chef" && <p>⚡ Vous êtes chef de chœur, vous pouvez gérer les répétitions et partitions.</p>}
            {role === "choriste" && <p>🎶 Vous êtes choriste, accès lecture seule.</p>}
          </div>
        )}

        {activeTab === "mediatheque" && (
          <div className="mediatheque">
            <MediaLibrary />
            {(role === "chef" || role === "admin") && (
              <UploadForm role={role} />
            )}
          </div>
        )}

        {activeTab === "calendrier" && (
          <div className="calendrier">
            <Countdown targetDate={`${nextEventDate}T20:00:00`} />
            <Calendar onNextEvent={setNextEventDate} role={role} />
          </div>
        )}
      </div>
    </div>
  );
}
