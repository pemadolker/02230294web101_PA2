// src/components/CaughtPokemonModal.js
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  List,
  ListItem
} from '@chakra-ui/react';
import { usePokemonStore } from '../store/usePokemonStore';

const CaughtPokemonModal = ({ isOpen, onClose }) => {
  const caughtPokemons = usePokemonStore(state => state.caughtPokemons);
  const releasePokemon = usePokemonStore(state => state.releasePokemon);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Caught Pokemons</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CaughtPokemonModal;
