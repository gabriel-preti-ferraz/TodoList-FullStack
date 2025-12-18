import { useState } from 'react'
import './css/App.css'
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Home />
    </main>
  )
}

export default App
