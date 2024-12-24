import logo from "./logo.svg";
// import "./App.css";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import KeyFeatures from "./components/KeyFeatures";
import Footer from "./components/Footer";
function App() {
  return <div className="App">
    
    <Navbar />
    <HeroSection/>
    <HowItWorks/>
    <KeyFeatures />
    <Footer />
  </div>;
}

export default App;
