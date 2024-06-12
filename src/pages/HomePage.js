// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import CaughtPokemonModal from '../components/CaughtPokemonModal';
import { usePokemonStore } from '../store/usePokemonStore';
import { Button, Box, SimpleGrid, Spinner } from '@chakra-ui/react';

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const catchPokemon = usePokemonStore(state => state.catchPokemon);

  const fetchPokemonList = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`);
      const data = await response.json();
      setPokemonList(data.results);
      setTotalPages(Math.ceil(data.count / 20));
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonList(currentPage);
  }, [currentPage]);

  const handleSearch = (searchTerm) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setPokemonList([data]))
      .catch(error => console.error('Error fetching Pokemon:', error));
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <Button onClick={() => setIsModalOpen(true)} colorScheme="teal" mt={4}>
        View Caught Pokemons
      </Button>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
          {pokemonList.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              pokemon={{ name: pokemon.name, url: pokemon.url }}
              onCatch={catchPokemon}
            />
          ))}
        </SimpleGrid>
      )}
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          mr={2}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
      <CaughtPokemonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;
