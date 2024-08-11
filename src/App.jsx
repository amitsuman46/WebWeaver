import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import AboutSection from './Components/AboutSection';
import PortfolioSection from './Components/PortfolioSection';
import TestimonialsSection from './Components/TestimonialsSection';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
