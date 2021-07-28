import {Children, useState} from "react";
import {
  Redirect,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Pokedex from './Pokedex';
import About from './About';
import Pokemon from './Pokemon';
import FourOhFour from './FourOhFour';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">SDI POKEDEX
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </header>
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Pokedex />
          </Route>
          <Route exact path="/about"> 
            <About/>
          </Route>
          <Route path={`/pokemon/:name/:page?`} children={
            ({match}) => {
              if(match) {
                console.log(match.params);
                return <Pokemon name={match.params.name} page={match.params.page}/>
              } else {
                alert("This page doesn't exist")
                return null;
              }
            }
          }>
          </Route>
          <Route exact path='/oops'>
            <FourOhFour />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;