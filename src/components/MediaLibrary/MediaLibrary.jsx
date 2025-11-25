import { useState, useEffect } from "react";
import "./MediaLibrary.scss";
import { db } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function MediaLibrary() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "media"), (snapshot) => {
      const items = snapshot.docs.map((doc) => doc.data());
      setMediaItems(items);
    });
    return () => unsubscribe();
  }, []);

  const counts = {
    all: mediaItems.length,
    pdf: mediaItems.filter((item) => item.type === "pdf").length,
    audio: mediaItems.filter((item) => item.type === "audio").length,
    video: mediaItems.filter((item) => item.type === "video").length,
    photo: mediaItems.filter((item) => item.type === "photo").length,
  };

  const filteredItems = mediaItems.filter(
    (item) =>
      (category === "all" || item.type === category) &&
      (item.title.toLowerCase().includes(search.toLowerCase()) ||
        (item.composer && item.composer.toLowerCase().includes(search.toLowerCase())))
  );

  // 🔖 Fonction pour afficher le badge selon le type
  const renderBadge = (type) => {
    switch (type) {
      case "pdf":
        return <span className="badge pdf">📄 Partition</span>;
      case "audio":
        return <span className="badge audio">🎵 Audio</span>;
      case "video":
        return <span className="badge video">🎥 Vidéo</span>;
      case "photo":
        return <span className="badge photo">📷 Photo</span>;
      default:
        return null;
    }
  };

  return (
    <div className="media-library">
      <h2>🎶 Médiathèque</h2>

      <input
        type="text"
        placeholder="Rechercher un média..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="tabs">
        {["all", "pdf", "audio", "video", "photo"].map((cat) => (
          <button
            key={cat}
            className={`tab ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat === "all" && `Tous (${counts.all})`}
            {cat === "pdf" && `Partitions (${counts.pdf})`}
            {cat === "audio" && `Audios (${counts.audio})`}
            {cat === "video" && `Vidéos (${counts.video})`}
            {cat === "photo" && `Photos (${counts.photo})`}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredItems.map((item, i) => (
          <div key={i} className="card">
            <div className="card-header">
              <span className="title">{item.title}</span>
              {renderBadge(item.type)}
            </div>

            {item.type === "pdf" && (
              <a href={item.file} target="_blank" rel="noopener noreferrer">
                📄 Voir / Télécharger
              </a>
            )}
            {item.type === "audio" && <audio controls src={item.file}></audio>}
            {item.type === "video" && <video controls src={item.file} width="100%"></video>}
            {item.type === "photo" && <img src={item.file} alt={item.title} />}
          </div>
        ))}
        {filteredItems.length === 0 && <p className="no-results">Aucun média trouvé.</p>}
      </div>
    </div>
  );
}
