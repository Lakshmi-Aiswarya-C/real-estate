import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Properties from './components/Properties';
import ContactUs from './components/ContactUs';
import './App.css';  // Assuming you have a separate CSS file for styling

function App() {
  return (
    <Router>
      <div>
        <nav className="tab-nav">
          <NavLink to="/" className="tab-link" activeClassName="active-tab" exact>
            Home
          </NavLink>
          <NavLink to="/about" className="tab-link" activeClassName="active-tab">
            About Us
          </NavLink>
          <NavLink to="/properties" className="tab-link" activeClassName="active-tab">
            Properties
          </NavLink>
          <NavLink to="/contact" className="tab-link" activeClassName="active-tab">
            Contact Us
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
