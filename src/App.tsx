import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Advantages from "./Components/Advantages";
import Team from "./Components/Team";
import News from "./Components/News";
import Persons from "./Components/Persons";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Advantages />
      <Team />
      <News />
      <Persons />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
