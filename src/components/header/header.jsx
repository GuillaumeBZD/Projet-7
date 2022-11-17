import React from "react";
import logo from "../../images/logo.svg";
import { NavLink, Link } from "react-router-dom";
import "./header.scss";


export function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <header>
      <Link to="/" className="logo_lien">
        <img
          src={logo}
          alt="KASA en rouge, le premier A est une maison"
          className="logo_site"
        />
      </Link>
      <nav>
        <NavLink to="/" className="lien_head" style={({ isActive }) => isActive ? activeStyle : undefined}>
          Accueil
        </NavLink>
        <NavLink to="Apropos" className="lien_head" style={({ isActive }) => isActive ? activeStyle : undefined}>
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}
