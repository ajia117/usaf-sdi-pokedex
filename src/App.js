import {Children, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Pokedex from './Pokedex';
import About from './About';
import Pokemon from './Pokemon';

import './App.css';

function App() {

  return (
    <div className="App">
        <header className="App-header">SDI POKEDEX
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </header>
        <div className='content'>
          
          <Route exact path="/">
            <Pokedex />
          </Route>
          <Route exact path="/about"> 
            <About/>
          </Route>
          <Route path={`/pokemon/:name`} children={
            ({match}) => {
              if(match) {
                return <Pokemon name={match.params.name} />
              }
            }
          }>
          </Route>
        </div>
    </div>
  );
}

export default App;