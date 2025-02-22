import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Section from "./Section";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <Header setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} />
      <Section id="koti" title="Koti" content="Kotisivu" />
      <Section id="tietoa" title="Tietoa" content="Täältä löydät yleistä tietoa Mitsubishistä!" />
      <Section id="apua" title="Apua" content="Apua kaikenlaisiin ongelmiin liittyen Mitsubishiin" />
      <Footer />
    </div>
  );
}

export default App;

