import Hero from './components/Hero'
import EmpathyGrid from './components/EmpathyGrid'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer' // <-- Add this import

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-900">
      <Hero />
      <EmpathyGrid />
      <Services />
      <About />
      <Footer /> {/* <-- Add the component here */}
    </div>
  )
}

export default App