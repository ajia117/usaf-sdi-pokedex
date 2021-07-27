import {useState, useEffect} from "react";

/**
 * /usaf-sdi-pokedex/node_modules/pokemon-sprites/sprites/pokemon
 */

const types = [
  "normal", "fighting", "flying", "poison",
  "ground", "rock", "bug", "ghost",
  "steel", "fire", "water", "grass",
  "electric", "psychic", "ice", "dragon",
  "dark", "fairy", "unknown", "shadow"
]


const Pokedex = ({onClick}) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
      .then(response => response.json())
      .then(json => setPokemonList(json.results))
  }, [setPokemonList])

  const typeOptions = (types) => {
    return types.map(type => <option key={type} value ={type}>{type}</option>)
  }

  const selectedType = (event) => {
    console.log(event.target.value);
    if(event.target.value === "all") {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
        .then(response => response.json())
        .then(json => setPokemonList(json.results))
    } else {
      const typeUrl = `https://pokeapi.co/api/v2/type/${event.target.value}`;
      fetch(typeUrl)
        .then(response => response.json())
        .then(({pokemon}) => {
          let pokeArr = pokemon.map(({pokemon}) => pokemon)
          setPokemonList(pokeArr);
        })
    }
  }

  const pokemonItem = (name, imageUrl) => {
    return (
      <li key={name} onClick={onClick}>
        <img src={imageUrl} alt={name}></img> 
        {name}
      </li>
    )
  }

  return (
    <div>
      <label htmlFor='type'>Filter By Type</label>
      <select name='type' id='type' onChange={selectedType}>
        <option key='all' value="all">All</option>
        {typeOptions(types)}
      </select>

      <ul>
        {
          pokemonList.map((pokemon) => {
            const url = pokemon.url
            const id = url.slice(34,-1)
            const imageURL= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            return pokemonItem(pokemon.name, imageURL)
          })
        }
      </ul>
    </div>
  )
}

export default Pokedex;

