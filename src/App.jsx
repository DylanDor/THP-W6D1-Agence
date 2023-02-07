import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Works from "./pages/Works/Works"
import StudyCase from "./components/StudyCase/StudyCase"
import Error from "./pages/Error/Error"
import './styles/main.scss'

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works theme={theme} />}>
          <Route path="/works/:path" element={<StudyCase />}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
