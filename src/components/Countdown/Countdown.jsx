import React, { useEffect, useState } from "react";
import "./Countdown.scss";

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <h2>⏳ Prochain événement</h2>
      {timeLeft.jours !== undefined ? (
        <div className="time-boxes">
          <div><span>{timeLeft.jours}</span> jours</div>
          <div><span>{timeLeft.heures}</span> h</div>
          <div><span>{timeLeft.minutes}</span> min</div>
          <div><span>{timeLeft.secondes}</span> s</div>
        </div>
      ) : (
        <p>L’événement est en cours 🎵</p>
      )}
    </div>
  );
} 