import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LumaVision from './components/BeforeAter'
import CuratedRecommendations from './components/CuratedRecommendations'
import ShopTheLook from './components/ShopTheLook'
import AskLuma from './components/AskLuma'
import AboutLuma from './components/AboutLuma'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LumaVision />
        <CuratedRecommendations />
        <ShopTheLook />
        <AskLuma />
        <AboutLuma />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}

export default App
