import React from 'react';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import VisitUs from './components/visitUs';


const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/VisitUs" element={<VisitUs/>} />
       
      
    </Routes>
  );
  
}

export default App;
