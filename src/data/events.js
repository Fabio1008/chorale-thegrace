// src/data/events.js

// Fonction utilitaire pour générer toutes les répétitions du vendredi
function generateFridayRehearsals(startDate, endDate) {
  const rehearsals = [];
  let current = new Date(startDate);

  while (current <= new Date(endDate)) {
    if (current.getDay() === 5) { // 5 = vendredi
      const isoDate = current.toISOString().split("T")[0];
      rehearsals.push({
        date: isoDate,
        title: "Répétition",
        description: "Salle paroissiale à 18h30"
      });
    }
    current.setDate(current.getDate() + 1);
  }

  return rehearsals;
}

// Génération des répétitions du 25 novembre 2025 au 31 mai 2026
const fridayRehearsals = generateFridayRehearsals("2025-11-25", "2026-05-31");

// Messes et animations spécifiques
const specialEvents = [
  { date: "2025-11-30", title: "Messe dominicale", description: "Église Saint-Étienne, 10h30" },
  { date: "2025-12-24", title: "Messe de Noël", description: "Église Saint-Étienne, 23h" },
  { date: "2026-01-17", title: "Messe", description: "Église Saint-Étienne, 18h30" },
  { date: "2026-01-25", title: "Messe", description: "Église Saint-Étienne, 10h30" },
  { date: "2026-02-14", title: "Messe", description: "Église Saint-Étienne, 18h30" },
  { date: "2026-02-22", title: "Messe", description: "Église Saint-Étienne, 10h30" },
  { date: "2026-03-14", title: "Messe", description: "Église Saint-Étienne, 18h30" },
  { date: "2026-03-22", title: "Messe", description: "Église Saint-Étienne, 10h30" },
  { date: "2026-04-05", title: "Messe", description: "Église Saint-Étienne, 10h30" },
  { date: "2026-04-26", title: "Messe", description: "Église Saint-Étienne, 18h30" },
  { date: "2026-05-14", title: "Messe", description: "Église Saint-Étienne, 10h30" }
];

// Fusion des répétitions et des événements spéciaux
let events = [...fridayRehearsals, ...specialEvents];

// ✅ Tri automatique par date
events.sort((a, b) => new Date(a.date) - new Date(b.date));

export { events };
