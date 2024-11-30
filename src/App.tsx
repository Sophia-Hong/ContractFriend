import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Upload from './components/Upload';
import Results from './components/Results';
import Footer from './components/Footer';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <ValueProposition />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/review" element={<Results />} />
            <Route path="/about" element={
              <div className="max-w-7xl mx-auto px-4 py-20">
                <h1 className="section-title">About ContractFriend</h1>
                <p className="section-subtitle">
                  ContractFriend is your AI-powered assistant for lease agreement review.
                  We help you understand your contracts better and make informed decisions.
                </p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
