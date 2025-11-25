// src/pages/HomePage.jsx
import React, { useState } from "react";
import Countdown from "../components/Countdown/Countdown";
import Calendar from "../components/Calendar/Calendar";
import Home from "../components/Home/Home"; // ton regroupement Hero, About, etc.
import { events } from "../data/events";
import "./HomePage.scss";

export default function HomePage() {
  const [nextEventDate, setNextEventDate] = useState("2025-12-01");

  return (
    <main className="home-page">
      {/* Hero section */}
      <Home />

      {/* Prochain événement */}
      <section className="next-event">
        <h2>Prochain événement</h2>
        <Countdown targetDate={`${nextEventDate}T20:00:00`} />
        <Calendar onNextEvent={setNextEventDate} />
      </section>

      {/* Derniers concerts */}
      <section className="concerts-preview">
        <h2>Nos derniers concerts</h2>
        <div className="concert-cards">
          {events.slice(0, 3).map((event, index) => (
            <div key={index} className="card">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rejoignez-nous */}
      <section className="join-us">
        <h2>Rejoignez-nous</h2>
        <p>Envie de chanter avec nous ? Venez participer à nos répétitions !</p>
        <a href="/espace-membre" className="btn">Espace Membre</a>
      </section>
    </main>
  );
}
