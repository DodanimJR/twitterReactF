import React from 'react';
import logo from './logo.svg';
import Home from './home';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import './App.css';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
