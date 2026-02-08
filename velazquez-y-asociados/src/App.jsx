import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./sections/Inicio";
import Nosotros from "./sections/Nosotros";
import Casos from "./sections/Casos";
import Contacto from "./sections/Contacto";
import { useTheme } from "./context/ThemeContext";

function AppContent() {
  const [tab, setTab] = useState("inicio");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isDarkMode } = useTheme();

  const handleTabChange = (newTab) => {
    if (tab === newTab) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setTab(newTab);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const renderSection = () => {
    switch(tab) {
      case "inicio": 
        return <Inicio setTab={handleTabChange} />;
      case "nosotros": 
        return <Nosotros setTab={handleTabChange} />;
      case "casos": 
        return <Casos setTab={handleTabChange} />;
      case "contacto": 
        return <Contacto setTab={handleTabChange} />;
      default: 
        return <Inicio setTab={handleTabChange} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Navbar tab={tab} setTab={handleTabChange} />

      <main className="min-h-[80vh]">
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderSection()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}