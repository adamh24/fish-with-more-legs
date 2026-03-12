import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar"
import Bubbles from "./Components/Bubbles"
import './Style/App.css'
import Home from "./Pages/Home"

function App() {
  return (
  
    <div className="main-container">

      <Router>

        <Navbar />

        <Bubbles />

        <Routes>

          <Route path="/" element={<Home />} />
        
        </Routes>

      </Router>
    
    </div>

  )
}

export default App

