import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export default function useUserRole() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      if (auth.currentUser) {
        const ref = doc(db, "users", auth.currentUser.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setRole(snap.data().role);
        }
      }
    };
    fetchRole();
  }, [auth.currentUser]);

  return role;
}
