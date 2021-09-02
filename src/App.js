import Description from "./components/Description";
import Aboutme from "./components/Aboutme";
import Rdv from "./components/Rdv";
import "./components/all.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#E1EBD5" }}>
      <div className="menu">
        <div className="navbar">
          <a href="#accueil">La naturopathie</a>
          <a href="#monapproche">Mon approche</a>
          <a href="#rdv">Prendre un rendez-vous</a>
        </div>
      </div>
      <div className="main">
      <header>
        <h1>Naturopathe certifiée</h1>
        <h3>Coralie GUYON</h3>
      </header>
      <body>
        <section id="accueil">
          <Description />
        </section>
        <section id="monapproche">
          <Aboutme />
        </section>
        <section id="rdv">
          <Rdv />
        </section>
      </body>
      <footer>Suivez-moi sur facebook , youtube pour mieux comprendre ma démarche</footer>
    </div>
    </div>
  );
}

export default App;
