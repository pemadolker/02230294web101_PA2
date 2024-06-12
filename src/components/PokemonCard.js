// src/components/PokemonCard.js
import React, { useEffect, useState } from 'react';
import { Box, Image, Heading, Text, Button, Spinner } from '@chakra-ui/react';

const PokemonCard = ({ pokemon, onCatch }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (pokemon.url) {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(data => setPokemonData(data))
        .catch(error => console.error('Error fetching Pokemon details:', error));
    } else {
      setPokemonData(pokemon);
    }
  }, [pokemon]);

  if (!pokemonData) return <Spinner size="md" />;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={4} shadow="md">
      <Image src={pokemonData.sprites?.front_default} alt={pokemonData.name} mx="auto" mt={4} />
      <Box p={4} textAlign="center">
        <Heading size="md" className="capitalize">{pokemonData.name}</Heading>
        <Text>Type: {pokemonData.types?.map(type => type.type.name).join(', ')}</Text>
      </Box>
      <Box textAlign="center" p={4}>
        <Button onClick={() => onCatch(pokemonData)} colorScheme="green">
          Catch
        </Button>
      </Box>
    </Box>
  );
};

export default PokemonCard;
