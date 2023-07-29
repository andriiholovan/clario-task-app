import React from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import CommonSections from "./components/CommonSections";

function App() {
  return (
    <div className="app">
      <Header />
      <WelcomeSection />
      <CommonSections />
    </div>
  );
}

export default App;
