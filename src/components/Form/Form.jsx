import React, { useState } from "react";
//import emailjs from "@emailjs/browser"; // 👉 décommente et importe correctement
import "./Form.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",   // ⚠️ remplace par ton Service ID EmailJS
        "YOUR_TEMPLATE_ID",  // ⚠️ remplace par ton Template ID EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"    // ⚠️ remplace par ta Public Key EmailJS
      )
      .then(() => {
        alert("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Échec de l’envoi du message.");
      });
  };

  return (
    <form className="formulaire" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Contact</legend>

        <div className="input-wrapper">
            <label>Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className={formData.name ? "text" : ""}>Nom</label>
        </div>

        <div className="input-wrapper">
            <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className={formData.email ? "text" : ""}>Email</label>
        </div>

        <div className="input-wrapper">
            <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label className={formData.message ? "text" : ""}>Message</label>
        </div>

        <input type="submit" value="Envoyer" />
      </fieldset>
    </form>
  );
}
