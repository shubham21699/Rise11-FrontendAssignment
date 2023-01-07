import "./App.css";
import TripTypeSelection from "./Components/TripTypeSelection";
import NavBar from "./Components/NavBar";
import LocationSelection from "./Components/LocationSelection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TripTypeSelection />
      <LocationSelection />
      <Footer />
    </div>
  );
}

export default App;
