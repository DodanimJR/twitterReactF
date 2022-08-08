import React from 'react';
import logo from './logo.svg';
import Home from './home';
import Login from './login';
import ProfileView from './profileView';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TweetView from './tweetView';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/profile/:id" element={<ProfileView/>}></Route>
        <Route path="/tweet/:id" element={<TweetView/>}></Route>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
