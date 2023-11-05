import React from 'react'
import './App.css';
import Login from './Components/Login';
import SecondsCounting from './Components/SecondsCounting';
import CountingUsingUseState from './Components/CountingUsingUseState';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   

    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/SecondsCounting" element={<SecondsCounting/>} />
        <Route path="/CountingUsingUseState" element={<CountingUsingUseState/>} />
      </Routes>
    </Router>

  )
}

export default App

