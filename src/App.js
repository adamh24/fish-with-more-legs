import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./Components/Navbar"
import Bubbles from "./Components/Bubbles"
import './Style/App.css'
import Home from "./Pages/Home"
import Recipes from "./Pages/Recipes"
import Courses from "./Pages/Courses"
import ScrollToTop from "./Components/ScrollToTop"
import About from './Pages/About';
import ContactOverlay from './Components/ContactOverlay';
import FlavourEngine from './Pages/FlavourEngine';
import AdminGate from './Admin/AdminGate';
import AdminPage from './Admin/AdminPage';
import BarPlan from './Admin/BarPlan';
import BDayCard from './CheddarGoblin/BDayCard';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [closingContact, setClosingContact] = useState(false);

    const handleCloseContact = () => {
    setClosingContact(true);
    setTimeout(() => {
      setShowContact(false);
      setClosingContact(false);
    }, 300);
  };


  return (
  
    <div className="main-container">

      <Router>

        <Navbar onOpenContact={() => setShowContact(true)}/>

        <ScrollToTop />

        <Bubbles />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/flavour-engine" element={<FlavourEngine />} />
          <Route path="/admin-gate" element={<AdminGate />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/bar-plan" element={<BarPlan />} />
          <Route path="/cheddar-goblin" element={<BDayCard />} />
        </Routes>

        {showContact && (
          <ContactOverlay onClose={handleCloseContact} closing={closingContact} />
        )}

      </Router>
    
    </div>

  )
}

export default App

