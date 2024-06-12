// src/store/usePokemonStore.js
import create from 'zustand';

const getInitialState = () => {
  const savedState = localStorage.getItem('caughtPokemons');
  return savedState ? JSON.parse(savedState) : [];
};

export const usePokemonStore = create((set) => ({
  caughtPokemons: getInitialState(),
  catchPokemon: (pokemon) => set((state) => {
    const newCaughtPokemons = [...state.caughtPokemons, pokemon];
    localStorage.setItem('caughtPokemons', JSON.stringify(newCaughtPokemons));
    return { caughtPokemons: newCaughtPokemons };
  }),
  releasePokemon: (pokemonName) => set((state) => {
    const newCaughtPokemons = state.caughtPokemons.filter(p => p.name !== pokemonName);
    localStorage.setItem('caughtPokemons', JSON.stringify(newCaughtPokemons));
    return { caughtPokemons: newCaughtPokemons };
  })
}));
