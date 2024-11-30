
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './Components/Home';
import Skills from './Components/Skills';
import Mission from './Components/Mission';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import './App.css';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    
    <Navbar/>
   <Home/>
   <Footer/>
   
   
   </>
  
  );
};

export default App;
