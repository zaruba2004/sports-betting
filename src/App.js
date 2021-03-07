import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import EventTable from './mainTable/eventTable.js';

function App() {

  const [matches, setMatches] = React.useState( [
    {id:1, completed: false, title: 'Матч ФК Минск - ФК Гродно'},
    {id:2, completed: false, title: 'Матч ФК Гомель - ФК Брест'},
    {id:3, completed: false, title: 'Матч ФК Могилев - ФК Витебск'},
    {id:4, completed: false, title: 'Матч ФК Речица - ФК Бобруйск'},
    {id:5, completed: false, title: 'Матч ФК Неман - ФК Батэ'}
  ])

  return (
    <div className="App">
    <header className="App-header">
      <a className="logoLeft"><img src={logo} className="App-logo" alt="logo" /></a>
      <h2>Ставки на спорт</h2>
      <span>Menu</span>        
    </header>
    <EventTable matches={matches} />
  </div>
  );
}

export default App;
