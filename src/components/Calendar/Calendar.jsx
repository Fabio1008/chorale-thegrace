import React, { useState } from "react";
import { events as initialEvents } from "../../data/events";
import "./Calendar.scss";

export default function Calendar({ onNextEvent, role }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [allEvents, setAllEvents] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState({ date: "", title: "", description: "" });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDayClick = (day) => {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (allEvents[dateKey]) {
      setSelectedEvent({ ...allEvents[dateKey], date: dateKey });
      if (onNextEvent) onNextEvent(dateKey); // ✅ sécurisation
    } else {
      setSelectedEvent(null);
    }
  };

  const addEvent = () => {
    if (role === "choriste") {
      alert("Accès refusé : seuls les chefs/admins peuvent ajouter des événements.");
      return;
    }
    if (!newEvent.date || !newEvent.title) {
      alert("Veuillez remplir la date et le titre.");
      return;
    }
    setAllEvents({
      ...allEvents,
      [newEvent.date]: { title: newEvent.title, description: newEvent.description },
    });
    setNewEvent({ date: "", title: "", description: "" });
    alert("Événement ajouté !");
  };

  const deleteEvent = (dateKey) => {
    if (role !== "admin") {
      alert("Accès refusé : seuls les admins peuvent supprimer.");
      return;
    }
    const updatedEvents = { ...allEvents };
    delete updatedEvents[dateKey];
    setAllEvents(updatedEvents);
    setSelectedEvent(null);
    alert("Événement supprimé !");
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>◀</button>
        <h2>{currentDate.toLocaleString("fr-FR", { month: "long", year: "numeric" })}</h2>
        <button onClick={handleNextMonth}>▶</button>
      </div>

      <div className="calendar-grid">
        {["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"].map((d,i)=>
          <div key={i} className="calendar-day-header">{d}</div>
        )}

        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-day empty"></div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const hasEvent = allEvents[dateKey];

          // ✅ Vérifie si c’est aujourd’hui
          const today = new Date();
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={day}
              className={`calendar-day ${hasEvent ? "event" : ""} ${isToday ? "today" : ""}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Affichage de l’événement sélectionné */}
      {selectedEvent && (
        <div className="calendar-event">
          <h3>{selectedEvent.title}</h3>
          <p>{selectedEvent.description}</p>
          {role === "admin" && (
            <button onClick={() => deleteEvent(selectedEvent.date)}>Supprimer</button>
          )}
        </div>
      )}

      {/* Formulaire d’ajout réservé aux chefs/admins */}
      {(role === "chef" || role === "admin") && (
        <div className="add-event">
          <h3>Ajouter un événement</h3>
          <input 
            type="date" 
            value={newEvent.date} 
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} 
          />
          <input 
            type="text" 
            placeholder="Titre" 
            value={newEvent.title} 
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
          />
          <input 
            type="text" 
            placeholder="Description" 
            value={newEvent.description} 
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} 
          />
          <button onClick={addEvent}>Ajouter</button>
        </div>
      )}
    </div>
  );
}
