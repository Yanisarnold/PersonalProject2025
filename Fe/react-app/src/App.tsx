import './App.css';
import Navbar from './components/Navbar.tsx';
import Hero from './pages/Hero.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects.tsx';
import Skills from './pages/Skills.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';
function App() {
  return (
    <>
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
      <Footer />
    </>
  );
}

export default App;
