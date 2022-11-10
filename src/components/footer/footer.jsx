import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <Link to="/">
        <img
          src="images/logo-white.svg"
          alt="KASA en blanc, le premier A est une maison"
        />
      </Link>
      <span>© 2021 Kasa. Tous droits réservés</span>
    </footer>
  );
}
