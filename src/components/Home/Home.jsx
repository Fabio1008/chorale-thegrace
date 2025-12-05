import React from "react";
import "./Home.scss";
import Slider from "../Slider/slider.jsx";
import NextEvent from "./NextEvent";
import About from "./About";
import ConcertsPreview from "./ConcertPreview";
import JoinUs from "./JoinUs";

export default function Home() {
  return (
    <main className="home">
      <Slider />
      <NextEvent />
      <About />
      <ConcertsPreview />
      <JoinUs />
    </main>
  );
}
