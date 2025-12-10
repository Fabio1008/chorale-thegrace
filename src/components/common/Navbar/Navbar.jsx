import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo à gauche */}
      <div className="logo">
        <img src={logo} alt="Logo Chorale The Grace" />
      </div>

      {/* Menu à droite */}
      <div className="menu">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/Login" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Membres
        </NavLink>
        <NavLink 
          to="/concerts" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Evènements
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Contactez-nous
        </NavLink>
      </div>
    </nav>
  );
}
