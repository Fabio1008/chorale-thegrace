import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../config/firebase"; // 🔑 ajout db
import { collection, addDoc } from "firebase/firestore"; // 🔑 Firestore

export default function UploadForm({ role }) {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("pdf"); // pdf, audio, video, photo
  const [url, setUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    if (role !== "chef" && role !== "admin") {
      alert("Vous n'avez pas les droits pour uploader.");
      return;
    }

    try {
      // 🔗 Upload vers Firebase Storage
      const storageRef = ref(storage, `${type}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      // 🔗 Sauvegarde dans Firestore
      await addDoc(collection(db, "media"), {
        type, // "pdf", "audio", "video", "photo"
        title: file.name,
        file: downloadURL,
        createdAt: new Date()
      });

      setUrl(downloadURL);
      alert("✅ Fichier uploadé et ajouté à la médiathèque !");
    } catch (error) {
      console.error("Erreur upload:", error);
      alert("❌ Une erreur est survenue lors de l'upload.");
    }
  };

  return (
    <div className="upload-form">
      <h3>Uploader un fichier</h3>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="pdf">Partition (PDF)</option>
        <option value="audio">Audio (MP3)</option>
        <option value="video">Vidéo (MP4)</option>
        <option value="photo">Photo (JPG/PNG/WebP)</option>
      </select>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Uploader</button>

      {url && (
        <p>
          URL du fichier :{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </p>
      )}
    </div>
  );
}
