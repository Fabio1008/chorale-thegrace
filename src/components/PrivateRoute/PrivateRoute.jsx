// PrivateRoute.jsx (Amélioration)
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import useUserRole from "../../hooks/useUserRole";

export default function PrivateRoute({ children, allowedRoles }) {
  const user = auth.currentUser;
  const { role, loading } = useUserRole();

  // 1. ⏳ On attend que la connexion et le rôle soient chargés
  if (loading) return <p>Chargement...</p>;

  // 2. 🔑 Si pas connecté (même après le chargement, car loading peut être false si l'user est null)
  if (!user) return <Navigate to="/login" replace />;

  // 3. 🔒 Vérification du rôle
  // Si allowedRoles est défini ET SI (le rôle n'est pas défini OU le rôle n'est pas dans la liste)
  if (allowedRoles && (!role || !allowedRoles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 4. 🎉 OK
  return children;
}