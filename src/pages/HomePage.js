import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import CaughtPokemonModal from '../components/CaughtPokemonModal';
import { Button, Box, SimpleGrid, Spinner, Heading } from '@chakra-ui/react';

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPokemonList = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 21}&limit=21`);
      const data = await response.json();
      setPokemonList(data.results);
      setTotalPages(Math.ceil(data.count / 21));
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonList(currentPage);
  }, [currentPage]);

  const handleSearch = (searchTerm) => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        setPokemonList([data]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Pokemon:', error);
        setLoading(false);
      });
  };

  return (
    <Box bg="black" minH="100vh" py={10} px={4}>
      <Box maxW="1200px" mx="auto">
        <Heading as="h1" size="xl" textAlign="center" mb={6} color="white">
          Pokedex
        </Heading>
        <SearchBar onSearch={handleSearch} />
        <Button onClick={() => setIsModalOpen(true)} colorScheme="teal" mt={4}>
          View Caught Pokemons
        </Button>
        {loading ? (
          <Box display="flex" justifyContent="center" my={8}>
            <Spinner size="xl" />
          </Box>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} mt={8}>
            {pokemonList.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                pokemon={{ name: pokemon.name, url: pokemon.url }}
              />
            ))}
          </SimpleGrid>
        )}
        <Box display="flex" justifyContent="center" my={8}>
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            mr={2}
            colorScheme="blue"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            colorScheme="blue"
          >
            Next
          </Button>
        </Box>
        <CaughtPokemonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Box>
    </Box>
  );
};

export default HomePage;
