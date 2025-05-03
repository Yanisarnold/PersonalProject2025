import { useState } from 'react'
import './App.css'
import Navbar from './components/commons/Navbar/Navbar.tsx'

function App() {
  const [count, setCount] = useState(0)  

  return (
    <>
      <Navbar />
      <div>
        <h1>Start learning React</h1>
        </div>
    </>
  )
}

export default App
