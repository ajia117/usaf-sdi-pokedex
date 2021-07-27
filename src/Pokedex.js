import {useState, useEffect} from "react";

/**
 * /usaf-sdi-pokedex/node_modules/pokemon-sprites/sprites/pokemon
 */




const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
      .then(response => response.json())
      .then(json => setPokemonList(json.results))
  }, [setPokemonList])


  return (
    <ul>
      {
        pokemonList.map((pokemon) => {
          const url = pokemon.url
          const id = url.slice(34,-1)
          const imageURL= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          return <Pokemon name={pokemon.name} imageUrl={imageURL} />
        })
      }
    </ul>
  )
}

const Pokemon = ({name, imageUrl}) => {
  
  return (
    <li key={name}>
      <img src={imageUrl} alt={name + " image"}></img> 
      {name}
    </li>
  )
}

export default Pokedex;


