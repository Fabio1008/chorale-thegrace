import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebase"; // chemin corrigé
import useUserRole from "../../hooks/useUserRole"; // 🔑 récupère le rôle depuis Firestore

export default function PrivateRoute({ children, allowedRoles }) {
  const user = auth.currentUser;
  const role = useUserRole();

  // 🔑 Si pas connecté → redirection vers /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔑 Si connecté mais rôle non autorisé → redirection vers /unauthorized
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Si connecté et rôle autorisé → affiche la page protégée
  return children;
}
