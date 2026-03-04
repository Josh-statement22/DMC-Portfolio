import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues";
import CorporateResponsibility from "./pages/CorporateResponsibility";
import OrganizationalStructure from "./pages/OrganizationalStructure";
import FinishedContracts from "./pages/FinishedContracts";
import ValuedClients from "./pages/ValuedClients";
// import BusinessInformation from "./pages/BusinessInformation";
// import MajorClients from "./pages/MajorClients";

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />

          {/* About Dropdown Pages */}
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/corporate-responsibility" element={<CorporateResponsibility />} />
          <Route path="/organizational-structure" element={<OrganizationalStructure />} />
          {/* <Route path="/business-information" element={<BusinessInformation />} /> */}

          {/* Projects Dropdown Page */}
          <Route path="/finished-contracts" element={<FinishedContracts />} />
          <Route path="/valued-clients" element={<ValuedClients />} />
          {/* <Route path="/major-clients" element={<MajorClients />} /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
