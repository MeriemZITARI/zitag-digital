import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityLandingPage from "./pages/CityLandingPage";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SeoSchema from "./components/SeoSchema";
import Offres from "./components/Offres";
import ScrollToHashElement from "./components/ScrollToHashElement";

// Regroupement de la page d'accueil (One-Page)
function MainPage() {
  return (
    <div>
      <SeoSchema />
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div className="p-5 md:px-[15%]">
        <Services />
      </div>
      <div>
        <Offres />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <ContactSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

// Routeur principal de l'application
export default function App() {
  return (
    <BrowserRouter>
    {/* Composant de gestion globale du scroll par ancre */}
    <ScrollToHashElement />
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<MainPage />} />

        {/* Pages locales dynamiques (villes) */}
        <Route path="/agence-web-epernon" element={<CityLandingPage />} />
        <Route path="/agence-web-chartres" element={<CityLandingPage />} />
        <Route path="/agence-web-dreux" element={<CityLandingPage />} />
        <Route path="/agence-web-rambouillet" element={<CityLandingPage />} />
        <Route path="/agence-web-france" element={<CityLandingPage />} />

        {/* Redirection de secours si l'URL n'existe pas */}
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}