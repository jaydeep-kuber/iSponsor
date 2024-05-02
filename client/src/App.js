// import React, { useState , useEffect } from 'react'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/logins/logins';
import LandingPage from './components/LandingPage/LandingPage';

import Find from './Pages/Find';
import Serv from './Pages/Serv';
import HowWeWork from './Pages/HowWeWork';
import Res from './Pages/Ressources';
// import LoginSignup from './Pages/LoginSignup';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  let path = (window.location.pathname);
    return (
      <>
     <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/logins"  element={<Login/>} />
				<Route path="/register" element={<Register/>} />
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/Find" element={<Find />} />
        <Route path="/Serv" element={<Serv />} />
        <Route path="/Ressources" element={<Res />} />
        <Route path="/Work" element={<HowWeWork />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
