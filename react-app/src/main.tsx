import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Hero from './sections/Hero/Hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Hero />
  </StrictMode>,
)
