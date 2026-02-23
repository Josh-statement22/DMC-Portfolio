import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";



function App() {
  return (
    <div  className="font-poppins">
      <Navbar />
      <About />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;