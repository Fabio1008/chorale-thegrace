import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔐 Connexion
  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // 🔥 redirection (bonne route !)
      navigate("/membres/espace");
    } catch (error) {
      console.error(error.message);
    }
  };

  // 🆕 Inscription
  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔥 Ajoute un rôle par défaut dans Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "choriste",
      });

      navigate("/membres/espace");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <input 
        type="email" 
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)} 
      />
      <input 
        type="password"
        placeholder="Mot de passe"
        onChange={(e)=>setPassword(e.target.value)} 
      />
      <button onClick={login}>Se connecter</button>
      <button onClick={register}>Inscription</button>
    </div>
  );
}
