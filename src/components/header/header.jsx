import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./header.scss";

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
        <Link to="/" className="lien_head">
          Accueil
        </Link>
        <Link to="Apropos" className="lien_head">
          À Propos
        </Link>
      </nav>
    </header>
  );
}
