import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV, faWeight, faBolt, faShieldAlt, faFistRaised, faHeartbeat, faRunning } from '@fortawesome/free-solid-svg-icons';

const PokemonDetail = ({ selectedPokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then(response => response.json())
        .then(data => setPokemonDetails(data))
        .catch(error => Swal.fire('Error', 'Failed to fetch Pokémon details', 'error'));
    }
  }, [selectedPokemon]);

  if (!pokemonDetails) return null;

  const statIcons = {
    'hp': faHeartbeat,
    'attack': faFistRaised,
    'defense': faShieldAlt,
    'special-attack': faBolt,
    'special-defense': faShieldAlt,
    'speed': faRunning
  };

  return (
    <div className="pokemon-detail">
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p><FontAwesomeIcon icon={faArrowsAltV} /> Height: {pokemonDetails.height}</p>
      <p><FontAwesomeIcon icon={faWeight} /> Weight: {pokemonDetails.weight}</p>
      <p>Type: {pokemonDetails.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      <p>Abilities: {pokemonDetails.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
      <div className="pokemon-stats">
        <h3>Base Stats</h3>
        <ul>
          {pokemonDetails.stats.map(statInfo => (
            <li key={statInfo.stat.name}>
              <FontAwesomeIcon icon={statIcons[statInfo.stat.name]} /> {statInfo.stat.name}: {statInfo.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;



