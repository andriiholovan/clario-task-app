import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import CommonSections from './components/CommonSections';
import HowToSection from './components/HowToSection';

function App() {
  return (
    <div className="app">
      <Header />
      <WelcomeSection />
      <CommonSections />
      <HowToSection />
    </div>
  );
}

export default App;
