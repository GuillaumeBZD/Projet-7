import React from "react";
import "./index.scss";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import LeRouter from "./components/router/router";

function App() {
  return (
    <>
      <div className="content_style">
        <Header />
        <div className="app-content">
          <LeRouter />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
