import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';

import Home from './components/pages/Home';
import Countries from './components/pages/Countries';
import Explore from './components/pages/Explore';
import SignUp from './components/pages/SignUp';
import Paris from './components/pages/Paris';
import Louvre from './components/pages/Louvre';
import DisneyLand from './components/pages/DisneyLand';
import Palais from './components/pages/Palais';
import Eyfel from './components/pages/Eyfel';
import France from './components/pages/France';
import Roma from './components/pages/Roma';

import CanadaPage from './components/pages/CanadaPage';
import Toronto from './components/pages/Toronto';
import NewYork from './components/pages/NewYork';
import UnitedStatesPage from './components/pages/UnitedStatesPage';
import LosAngles from './components/pages/LosAngeles';
import LasVegas from './components/pages/LasVegas';
import Miami from './components/pages/Miami';
import SanFrancisco from './components/pages/SanFrancisco';


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
       <Route path='/roma' element={<Roma />} />

       <Route path="/countries/canada" element={<CanadaPage />} />
        <Route path="/canada/Toronto" element={<Toronto />} />
      <Route path="/countries/United States" element={<UnitedStatesPage />} />
      <Route path="/United States/Los Angeles" element={<LosAngles />} />
      <Route path="/United States/Las Vegas" element={<LasVegas />} />
      <Route path="/United States/Miami" element={<Miami />} />
      <Route path="/United States/San Francisco" element={<SanFrancisco />} />
      <Route path="/United States/New York" element={<NewYork />} />
     <Route path ="/countries/france" element={<France/>} />
     <Route path ="/france/paris" element={<Paris/>} />
      
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;