
import React from 'react';

const pokeballUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Poké_Ball_icon.svg';

const PokemonList = ({ pokemons, selectPokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <div 
          key={pokemon.name} 
          onClick={() => selectPokemon(pokemon.name)}
          className="pokemon-item"
        >
          <img src={pokeballUrl} alt="Pokéball" />
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
