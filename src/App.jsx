import React from "react";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import Accueil from "./pages/accueil";
import Logements from "./pages/logements";
import Erreur from "./pages/erreur";
import Apropos from "./pages/apropos";
import { Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
        <Header />
        <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logements/:id" element={<Logements />} />
        <Route path="Erreur" element={<Erreur />} />
        <Route path="*" element={<Erreur />} />
        </Routes>
        <Footer />
    </>
  );
}
export default App;
