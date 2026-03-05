import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
// import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues";
import CorporateResponsibility from "./pages/CorporateResponsibility";
import OrganizationalStructure from "./pages/OrganizationalStructure";
import FinishedContracts from "./pages/FinishedContracts";
import ValuedClients from "./pages/ValuedClients";
import Automotive from "./pages/items/Automotive";
import Construction from "./pages/items/Construction";
import Industrial from "./pages/items/Industrial";
import PPE from "./pages/items/PPE";
import Hardware from "./pages/items/Hardware";
import ElectricalIndustrialTools from "./pages/items/ElectricalIndustrialTools";
// import BusinessInformation from "./pages/BusinessInformation";
// import MajorClients from "./pages/MajorClients";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products-and-services" element={<Services />} />
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
          <Route path="/products/items/construction" element={<Construction />} />
          <Route path="/products/items/automotive" element={<Automotive />} />
          <Route path="/products/items/industrial" element={<Industrial />} />
          <Route path="/products/items/ppe" element={<PPE />} />
          <Route path="/products/items/hardware" element={<Hardware />} />
          <Route path="/products/items/electrical-industrial-tools" element={<ElectricalIndustrialTools />} />
          <Route path="/services/items/automotive" element={<Automotive />} />
          <Route path="/services/items/construction" element={<Construction />} />
          <Route path="/services/items/industrial" element={<Industrial />} />
          <Route path="/services/items/ppe" element={<PPE />} />
          <Route path="/services/items/hardware" element={<Hardware />} />
          <Route path="/services/items/electrical-industrial-tools" element={<ElectricalIndustrialTools />} />
          {/* <Route path="/major-clients" element={<MajorClients />} /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
