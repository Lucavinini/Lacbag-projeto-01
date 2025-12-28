
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';
import QuoteAssistant from './components/QuoteAssistant';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Services />
        <About />
        <Location />
      </main>
      <Footer />
      {/* AI Assistant to help customers find the right product */}
      <QuoteAssistant />
    </div>
  );
};

export default App;
