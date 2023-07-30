import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import CommonSections from './components/CommonSections';
import HowToSection from './components/HowToSection';
import PriceSection from './components/PriceSection';

function App() {
  return (
    <div className="app">
      <Header />
      <WelcomeSection />
      <CommonSections />
      <HowToSection />
      <PriceSection />
    </div>
  );
}

export default App;
