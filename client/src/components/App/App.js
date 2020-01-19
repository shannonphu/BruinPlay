import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Card from '../Card/Card';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Card title="24K Magic" artistName="Bruno Mars" audioImageSrc="https://raw.githubusercontent.com/acm-hackschool-f17/BruinPlayResources/master/cover_art/bruno-mars-24k-magic/bruno-mars-24k-magic.jpg"/>
        <p>
          Edit <code>src/App.js</code> and save to reload. Rucha is poopoo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
