import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Countries from './components/pages/Countries';
import Explore from './components/pages/Explore';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/sign-up' element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;