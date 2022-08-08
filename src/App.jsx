import React from 'react';
import logo from './logo.svg';
import Home from './home';
import Login from './login';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
