import "./App.css";
import BusinessSection from "./Components/BusinessSection/BusinessSection";
import Header from "./Container/Header/Header";
import Rectangle from "./Container/Rectangle/Rectangle";

function App() {
  return (
    <div className="hoobankSection">
      <Header />
      <BusinessSection />
      <Rectangle />
    </div>
  );
}

export default App;
