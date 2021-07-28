import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Pokemon = ({name, page}) => {
  const [currentPoke, setCurrentPoke] = useState({
    abilities: [],
    moves: []
  });
  


  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setCurrentPoke({
          abilities: json.abilities,
          moves: json.moves
        })
      })
  }, [setCurrentPoke])
  
  const PresentPoke = () => {
    if (page === 'moves') {
      return (
        <div>
          <h3>Moves</h3>
          <ul name='moves' id='moves'>
            {currentPoke.moves.map(({move}) => <li key={move.name}>{move.name}</li>) }
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Abilities</h3>
          <ul name='abilities' id='abilities'>
            {currentPoke.abilities.map(({ability}) => <li key={ability.name}>{ability.name}</li>) }
          </ul>
        </div>
       
      ) 
    }
  }
  const changePage = () => {
    if(page === 'moves') {
      return `/pokemon/${name}/abilities`;
    } else {
      return `/pokemon/${name}/moves`;
    }
  }
  
  return (
    <div>
      <Link to={changePage}>Change View</Link>
      <PresentPoke />
    </div>
  )
}

export default Pokemon;