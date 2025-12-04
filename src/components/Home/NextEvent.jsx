import React from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function NextEvent() {
  return (
    <section className="next-event">
      <h2>Prochain événement</h2>
      <p>Concert de Noël - 15 Décembre 2025</p>
      <div className="countdown">⏳ 7 jours 0h 36min</div>
      <a href="/concerts" className="btn">Voir les détails</a>
    </section>
  );
}


export async function addRepetitionEvent() {
  const db = getFirestore();

  await addDoc(collection(db, "events"), {
    title: "Répétition chorale",
    dayOfWeek: 5,             // vendredi
    time: "19:00",
    repeat: "weekly",
    location: "Salle de répétition",
    createdAt: serverTimestamp()
  });

  console.log("Évènement ajouté !");
}