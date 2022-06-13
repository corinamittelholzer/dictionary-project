import "./App.css";
import "./Dictionary.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer className="text-center mt-5">
          <a
            href="https://github.com/corinamittelholzer/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Corina Mittelholzer
        </footer>
      </div>
    </div>
  );
}

export default App;
