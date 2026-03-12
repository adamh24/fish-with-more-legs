import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar"
import Bubbles from "./Components/Bubbles"
import './Style/App.css'
import Home from "./Pages/Home"
import Recipes from "./Pages/Recipes"
import Courses from "./Pages/Courses"
import ScrollToTop from "./Components/ScrollToTop"

function App() {
  return (
  
    <div className="main-container">

      <Router>

        <Navbar />

        <ScrollToTop />

        <Bubbles />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/courses" element={<Courses />} />
        
        </Routes>

      </Router>
    
    </div>

  )
}

export default App

