import "./App.css";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Accueil />
      </div>
    </div>
  );
}

export default App;
