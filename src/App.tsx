import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import CommonSections from './components/CommonSections';
import HowToSection from './components/HowToSection';
import PriceSection from './components/PriceSection';
import ReviewsSection from './components/ReviewsSection';
import ReminderSection from './components/ReminderSection';
import Footer from './components/Footer';
import ScrollProvider from './context/ScrollProvider';

function App() {
  return (
    <div>
      <ScrollProvider>
        <Header />
        <WelcomeSection />
        <CommonSections />
        <HowToSection />
        <PriceSection />
        <ReviewsSection />
        <ReminderSection />
        <Footer />
      </ScrollProvider>
    </div>
  );
}

export default App;
