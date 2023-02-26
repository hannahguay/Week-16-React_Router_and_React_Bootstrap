import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React from 'react';

//styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//pages
import Home from './pages/Home';
import MoreInfo from './pages/Moreinfo';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='moreinfo' element={<MoreInfo />} />
          <Route path='about' element={<About />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
