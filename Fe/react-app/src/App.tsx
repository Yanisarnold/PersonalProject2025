import './App.css'
import Navbar from './components/commons/Navbar/Navbar.tsx'
import Hero from './sections/Hero/Hero.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './sections/Projects/Projects.tsx'
import Skills from './sections/Skills/Skills.tsx'
import About from './sections/About/About.tsx'
import Contact from './sections/Contact/contact.tsx'
function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
