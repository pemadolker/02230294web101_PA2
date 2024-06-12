// src/components/CaughtPokemonList.js
import React from 'react';
import { Box, Heading, List, ListItem, Button } from '@chakra-ui/react';
import { usePokemonStore } from '../store/usePokemonStore';

const CaughtPokemonList = () => {
  const caughtPokemons = usePokemonStore(state => state.caughtPokemons);
  const releasePokemon = usePokemonStore(state => state.releasePokemon);

  return (
    <Box p={4} bg="gray.100" rounded="md" shadow="md" mt={4}>
      <Heading size="md" mb={4}>Caught Pokemons</Heading>
      <List spacing={3}>
        {caughtPokemons.map(pokemon => (
          <ListItem key={pokemon.name} className="capitalize">
            {pokemon.name}
            <Button 
              onClick={() => releasePokemon(pokemon.name)} 
              colorScheme="red" 
              size="xs" 
              ml={4}
            >
              Release
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CaughtPokemonList;
