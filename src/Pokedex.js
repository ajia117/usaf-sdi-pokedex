import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

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


const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchAll = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(json => setPokemonList(json.results))
  }

  useEffect(() => {
    fetchAll();
  }, [setPokemonList])

  const typeOptions = (types) => {
    return types.map(type => <option key={type} value ={type}>{type}</option>)
  }

  const selectedType = (event) => {
    console.log(event.target.value);
    if(event.target.value === "all") {
      fetchAll();
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

  //onClick = (event) => console.log("clicked a pokemon: ", event);

  const pokemonItem = (name, imageUrl) => {
    return (
        <Link to={`/pokemon/${name}`} key={name}>
          <li>
            <img className="row" src={imageUrl} alt={name}></img> 
            <div className="row">
              {name}
            </div>
          </li>
          <div className="divider"></div>
        </Link>
    )
  }

  return (
    <div>
      <div className='input-field row'>
        
        <select className='browser-default' onChange={selectedType}>
          <option key='all' value="all">Filter By Type</option>
          {typeOptions(types)}
        </select>
      </div>

      <ul className='row'>
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


