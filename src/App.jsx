import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'
import { menuItems } from './data/menu'

function App() {
  return (
    <div className="bg-[#f8f1ea] text-[#2a201a]">
      <Navbar />
      <main>
        <Hero />
        <Menu items={menuItems} />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
