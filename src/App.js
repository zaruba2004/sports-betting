import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventTable from './mainTable/eventTable.js';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <a className="logoLeft"><img src={logo} className="App-logo" alt="logo" /></a>
      <h2>Ставки на спорт</h2>
      <span>Menu</span>        
    </header>
    <EventTable  />
  </div>
  );
}

export default App;
