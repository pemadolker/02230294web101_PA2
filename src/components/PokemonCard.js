// src/components/PokemonCard.js
import React, { useEffect, useState } from 'react';
import {
  Box, Image, Heading, Text, Button, Spinner, Modal,
  ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton
} from '@chakra-ui/react';
import PokemonDetails from './PokemonDetails';
import { usePokemonStore } from '../store/usePokemonStore';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const caughtPokemons = usePokemonStore(state => state.caughtPokemons);
  const catchPokemon = usePokemonStore(state => state.catchPokemon);

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

  const handleCatch = () => {
    catchPokemon(pokemonData);
  };

  const isCaught = caughtPokemons.some(p => p.name === pokemonData?.name);

  if (!pokemonData) return <Spinner size="md" />;

  return (
    <Box
      bg="white" // White background color for the card
      color="black" // Black text color
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={4}
      p={4}
      shadow="md"
      cursor="pointer"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
    >
      <Image 
        src={pokemonData.sprites?.front_default} 
        alt={pokemonData.name} 
        mx="auto" 
        mt={4} 
        onClick={() => setIsModalOpen(true)} 
      />
      <Box p={4} textAlign="center">
        <Heading size="md" className="capitalize">{pokemonData.name}</Heading>
        <Text>Type: {pokemonData.types?.map(type => type.type.name).join(', ')}</Text>
      </Box>
      <Box textAlign="center" p={4}>
        <Button 
          onClick={handleCatch} 
          colorScheme={isCaught ? "gray" : "green"} 
          disabled={isCaught}
        >
          {isCaught ? "Caught" : "Catch"}
        </Button>
      </Box>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="xl">
        {/* size="xl" makes the modal full width on smaller screens */}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{pokemonData.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PokemonDetails pokemonData={pokemonData} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PokemonCard;
