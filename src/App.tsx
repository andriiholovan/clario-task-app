import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import CommonSections from './components/CommonSections';
import HowToSection from './components/HowToSection';
import PriceSection from './components/PriceSection';
import ReminderSection from './components/ReminderSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <CommonSections />
      <HowToSection />
      <PriceSection />
      <ReminderSection />
      <Footer />
    </div>
  );
}

export default App;
