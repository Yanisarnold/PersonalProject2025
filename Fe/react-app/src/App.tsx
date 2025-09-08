import './App.css';
import Navbar from './components/Navbar.tsx';
import Hero from './pages/Hero.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects.tsx';
import Skills from './pages/Skills.tsx';
import ProductListingPage from './pages/productListing.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';
import ProductDetail from './components/ProductDetail.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/productListing" element={<ProductListingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
