import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-white.svg";
import "./footer.scss"

export function Footer() {
  return (
    <footer>
      <Link to="/">
        <img
          src={logo}
          alt="KASA en blanc, le premier A est une maison"
        />
      </Link>
      <span>© 2021 Kasa. Tous droits réservés</span>
    </footer>
  );
}
