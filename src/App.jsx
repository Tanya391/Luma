import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LumaVision from './components/BeforeAfter'
import CuratedRecommendations from './components/CuratedRecommendations'
import ShopTheLook from './components/ShopTheLook'
import AskLuma from './components/AskLuma'
import AboutLuma from './components/AboutLuma'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
]

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(prev => !prev)

  // Sync state to body class
  useEffect(() => {
    document.body.style.transition = 'background-color 0.7s ease, color 0.7s ease'
    if (isDark) {
      document.body.classList.add('theme-dark')
    } else {
      document.body.classList.remove('theme-dark')
    }
  }, [isDark])

  // Konami code listener
  useEffect(() => {
    let konamiIndex = 0

    const handleKeyDown = (e) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        konamiIndex++
        if (konamiIndex === KONAMI_CODE.length) {
          setIsDark(prev => !prev)
          konamiIndex = 0
        }
      } else {
        konamiIndex = 0
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

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
    </div>
  )
}

export default App
