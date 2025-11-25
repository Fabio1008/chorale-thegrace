import React from "react";
import "./Home.scss";
import Hero from "./Hero";
import NextEvent from "./NextEvent";
import About from "./About";
import ConcertsPreview from "./ConcertPreview";
import JoinUs from "./JoinUs";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <NextEvent />
      <About />
      <ConcertsPreview />
      <JoinUs />
    </main>
  );
}
