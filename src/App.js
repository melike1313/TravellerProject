import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Countries from './components/pages/Countries';
import Explore from './components/pages/Explore';
import SignUp from './components/pages/SignUp';
import Paris from './components/pages/Paris';
import Louvre from './components/pages/Louvre';
import DisneyLand from './components/pages/DisneyLand';
import Palais from './components/pages/Palais';
import Eyfel from './components/pages/Eyfel';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/sign-up' element={<SignUp />} />

        <Route path='/paris' element={<Paris />} />
        <Route path='/louvre' element={<Louvre />} />
        <Route path='/disney' element={<DisneyLand />} />
        <Route path='/eyfel' element={<Eyfel />} />
       <Route path='/palais' element={<Palais />} />
      </Routes>
    </Router>
  );
}

export default App;