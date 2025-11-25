import React from "react";

export default function ConcertsPreview() {
  return (
    <section className="concerts-preview">
      <h2>Nos derniers concerts</h2>
      <div className="concert-cards">
        <div className="card">🎵 Concert d’été</div>
        <div className="card">🎵 Festival Gospel</div>
        <div className="card">🎵 Concert de Noël</div>
      </div>
    </section>
  );
}
