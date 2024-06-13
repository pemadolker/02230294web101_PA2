// src/components/PokemonDetails.js
import React from 'react';
import { Box, Heading, Text, List, ListItem, Image } from '@chakra-ui/react';

const PokemonDetails = ({ pokemonData }) => {
  if (!pokemonData) return null;

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={4} shadow="md">
      <Image src={pokemonData.sprites?.front_default} alt={pokemonData.name} mx="auto" mt={4} />
      <Heading size="md" className="capitalize">{pokemonData.name}</Heading>
      <Box p={4}>
        <Text>Type: {pokemonData.types?.map(type => type.type.name).join(', ')}</Text>
        <List spacing={3} mt={4}>
          <ListItem>Height: {pokemonData.height}</ListItem>
          <ListItem>Weight: {pokemonData.weight}</ListItem>
          <ListItem>Abilities: {pokemonData.abilities?.map(ability => ability.ability.name).join(', ')}</ListItem>
          <ListItem>Base Experience: {pokemonData.base_experience}</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default PokemonDetails;
