import React from "react";

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
