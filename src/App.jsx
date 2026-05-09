import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import EmpathyGrid from './components/EmpathyGrid';
import About from './components/About';
import Footer from './components/Footer';
// We import ClarityApp here specifically for the standalone social media view
import ClarityApp from './components/ClarityApp';

function App() {
  const [showOnlyQuiz, setShowOnlyQuiz] = useState(false);

  useEffect(() => {
    // 1. Force the browser to start at the top
    window.scrollTo(0, 0);

    // 2. Check the URL for the standalone tool parameter
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('tool') === 'clarity') {
      setShowOnlyQuiz(true);
    }
  }, []);

  // --- CONDITIONAL VIEW: Standalone Social Media Quiz ---
  if (showOnlyQuiz) {
    return (
      <main className="min-h-screen bg-stone-50 font-sans text-gray-900">
        <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 pt-12">
          <a href="/" className="text-emerald-700 text-sm font-medium hover:underline mb-6 inline-block">
            &larr; Back to Sabi's Career Ignite
          </a>
          {/* Renders ONLY the quiz for your WhatsApp/Instagram links */}
          <ClarityApp />
        </div>
      </main>
    );
  }

  // --- STANDARD VIEW: The Full Website Layout ---
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-900">
      {/* Hero already contains the side-by-side ClarityApp for desktop users */}
      <Hero />
      <Services />
      <EmpathyGrid />
      <About />
      <Footer />
    </div>
  );
}

export default App;