import { useState, useEffect } from "react";

const Pokemon = ({name}) => {
  const [currentPoke, setCurrentPoke] = useState({
    abilities: [],
    environments: []
  });
  const [ablitiesView, changeView] = useState(true);


  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setCurrentPoke({
          abilities: json.abilities,
          environments: []
        })
      })
  }, [setCurrentPoke])

  
  return (
    <ul name='abilities'>
      {currentPoke.abilities.map(({ability}) => <li>{ability.name}</li>) }
    </ul>
  )
}

export default Pokemon;