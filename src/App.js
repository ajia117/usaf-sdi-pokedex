import './App.css';
import Pokedex from './Pokedex';
import About from './About';
import Pokemon from './Pokemon';
import {useState} from "react";

function App() {

  const switchContent = (event) => {
    event.preventDefault();

    let name;
    if(event.target.nodeName === "IMG") {
      name = event.target.alt;
    } else if(event.target.nodeName === "LI") {
      name = event.target.innerText;
    }

    const contentObj = {
      "home": <Pokedex onClick={switchContent} />,
      "about": <About />,
      "pokemon": <Pokemon name={name}/>
    }
    let newContent;
    if(name){
      newContent = contentObj["pokemon"];
    } else {
      newContent = contentObj[event.target.value]
    }
    setContent(newContent)
  }

  const [content, setContent] = useState(<Pokedex onClick={switchContent}/>)

  return (
    <div className="App">
      <header className="App-header">SDI POKEDEX
        <button onClick={switchContent} value="about">About Us</button>
        <button onClick={switchContent} value='home'>Home</button>
      </header>
      <div className='content'>
        {content}
      </div>
      
    </div>
  );
}

export default App;