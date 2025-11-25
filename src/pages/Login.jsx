import React from "react";
import Auth from "../components/Auth/Auth"; // adapte le chemin selon ton projet

export default function Login() {
  return (
    <div className="login-page">
      <h2>Connexion</h2>
      <p>Veuillez vous connecter pour accéder à l’espace membre.</p>
      <Auth />
    </div>
  );
}
