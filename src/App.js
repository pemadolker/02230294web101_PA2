// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
