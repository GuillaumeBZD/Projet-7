import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "../../pages/accueil/accueil";
import Logements from "../../pages/logements/logements";
import Erreur from "../../pages/erreur/erreur";
import Apropos from "../../pages/a propos/apropos";

//sert pour faire les routes de notre site
function LeRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logements/:id" element={<Logements />} />
        <Route path="Erreur" element={<Erreur />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </>
  );
}

export default LeRouter;
