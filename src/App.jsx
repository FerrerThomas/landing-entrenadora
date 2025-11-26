import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Routines from './components/Routines';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-col items-center w-full">
          <Hero />
          <About />
          <Plans />
          <Routines />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
