import React from "react";
import coverImg from "../../assets/img/cover (2).webp";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={coverImg} alt="Couverture Chorale" className="cover-img" />
      </div>

      <div className="hero-content">
        <h1>Bienvenue à la Chorale The Grace 🎶</h1>
        <p>Une communauté musicale qui partage la passion du chant.</p>
        <a href="/concerts" className="btn">Découvrir nos concerts</a>
      </div>
    </section>
  );
}
