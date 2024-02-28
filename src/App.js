import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Countries from './components/pages/Countries';
import Explore from './components/pages/Explore';
import SignUp from './components/pages/SignUp';
<<<<<<< HEAD
import Paris from './components/pages/Paris';

=======
>>>>>>> 9efa451562b57829aa34886fb3a654ccf49625c4

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/sign-up' element={<SignUp />} />
<<<<<<< HEAD
        <Route path='/paris' element={<Paris />} />
=======
>>>>>>> 9efa451562b57829aa34886fb3a654ccf49625c4

      </Routes>
    </Router>
  );
}

export default App;