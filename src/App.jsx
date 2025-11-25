import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage.jsx";
import MemberPage from "./pages/MemberPage.jsx";
import ConcertsPage from "./pages/ConcertsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Unauthorized from "./components/Unauthorized/Unauthorized.jsx"; // 🔑 nouvelle page pour accès refusé

// Composants
import Navbar from "./components/common/Navbar/Navbar.jsx";
import MemberArea from "./components/MemberArea/MemberArea.jsx";
import Footer from "./components/common/Footer/Footer.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

import "./main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* 🔝 Barre de navigation */}
        <Navbar />

        {/* 🔑 Contenu principal */}
        <main className="main-content">
          <Routes>
            {/* Pages publiques */}
            <Route path="/" element={<HomePage />} />
            <Route path="/membres" element={<MemberPage />} />
            <Route path="/concerts" element={<ConcertsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Pages protégées */}
            <Route
              path="/espace-membre"
              element={
                <PrivateRoute allowedRoles={["admin", "chef", "choriste"]}>
                  <MemberArea />
                </PrivateRoute>
              }
            />

            {/* Exemple : route réservée aux admins */}
            <Route
              path="/admin-panel"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <h2>Panneau d’administration 👑</h2>
                </PrivateRoute>
              }
            />

            {/* Page 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* 🔻 Footer affiché partout */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;





//import { HomePage, MemberPage, ConcertsPage, NotFound } from "./pages";

