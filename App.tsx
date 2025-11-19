import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { EmailPreview } from './components/EmailPreview';
import { Ecosystem } from './components/Ecosystem';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Ecosystem />
      </main>
      <Footer />
    </div>
  );
};

export default App;