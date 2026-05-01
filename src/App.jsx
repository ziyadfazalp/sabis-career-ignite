import React, { useEffect } from 'react'
import Hero from './components/Hero'
import EmpathyGrid from './components/EmpathyGrid'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-900">
      <Hero />
      <EmpathyGrid />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default App