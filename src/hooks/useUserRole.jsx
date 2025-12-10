import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function useUserRole() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setRole(null);
        setLoading(false);
        return;
      }

      try {
        const refUser = doc(db, "users", user.uid);
        const snap = await getDoc(refUser);

        if (snap.exists()) {
          setRole(snap.data().role);
        } else {
          setRole("choriste"); // valeur par défaut
        }
      } catch (error) {
        console.error("Erreur récupération rôle :", error);
        setRole(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ retourne les deux états
  return { role, loading };
}
