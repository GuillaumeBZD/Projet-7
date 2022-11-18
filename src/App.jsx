import React from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import Accueil from "./pages/accueil/accueil";
import Logements from "./pages/logements/logements";
import Erreur from "./pages/erreur/erreur";
import Apropos from "./pages/a propos/apropos";
import { Route, Routes } from "react-router-dom";
import "./index.scss"

function App() {
  return (
    <>
    <div className="content_style">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Logements/:id" element={<Logements />} />
          <Route path="Erreur" element={<Erreur />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </div>
      </div>
      <Footer />
      
    </>
  );
}
export default App;
