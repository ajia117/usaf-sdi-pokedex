import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">SDI POKEDEX
        <a href='AboutUs'>About Us</a>
        <a href='Home'>Home</a>
      </header>
      <div className='pokedex'>
        <Pokedex />
      </div>
      
    </div>
  );
}

export default App;
