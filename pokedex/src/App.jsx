
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import Modal from 'react-modal';
import './styles.css';
import Swal from 'sweetalert2';
import './assets/CSS/index.css';

Modal.setAppElement('#root');  

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(error => Swal.fire('Error', 'Failed to fetch Pokémon list', 'error'));
  }, []);

  const openModal = (pokemonName) => {
    setSelectedPokemon(pokemonName);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const filteredPokemons = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokedex Logo" className="pokedex-logo" />
      </header>
      <hr />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PokemonList pokemons={filteredPokemons} selectPokemon={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFF', 
            padding: '20px',
            borderRadius: '10px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          }
        }}
      >
        {selectedPokemon && <PokemonDetail selectedPokemon={selectedPokemon} />}
      </Modal>
    </div>
  );
};

export default App;
