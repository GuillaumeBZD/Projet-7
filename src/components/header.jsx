import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
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
        <Link to="/">Accueil</Link>
        <Link to="Apropos">A Propos</Link>
      </nav>
    </header>
  );
}
