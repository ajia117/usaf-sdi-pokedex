import { useState, useEffect } from "react";

const Pokemon = ({name}) => {
  const [currentPoke, setCurrentPoke] = useState({
    abilities: [],
    moves: []
  });
  const [abilitiesView, changeView] = useState(true);


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

  
  const presentPoke = () => {
    if (abilitiesView) {
      return (
        <div>
          <h3>Abilities</h3>
          <ul name='abilities' id='abilities'>
            {currentPoke.abilities.map(({ability}) => <li key={ability.name}>{ability.name}</li>) }
          </ul>
        </div>
        
        
      )
    } else {
      return (
        <div>
          <h3>Moves</h3>
          <ul name='moves' id='moves'>
            {currentPoke.moves.map(({move}) => <li key={move.name}>{move.name}</li>) }
          </ul>
        </div>
      ) 
    }
  }
  
  return (
    <div>
      <button onClick={() => changeView(!abilitiesView)}>Switch View</button>
      {presentPoke()}
    </div>
  )
}

export default Pokemon;