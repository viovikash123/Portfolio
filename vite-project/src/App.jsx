
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import './App.css';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/scrollToTop';


const App = () => {
  return (
    <>
    
    <Navbar/>
   <Home/>
   <Footer/>
   <ScrollToTopButton />
   
   
   
   </>
  
  );
};

export default App;
