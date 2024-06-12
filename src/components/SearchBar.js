// src/components/SearchBar.js
import React, { useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box display="flex" alignItems="center" p={4} bg="gray.100" rounded="md" shadow="md">
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a Pokemon"
        mr={4}
      />
      <Button onClick={handleSearch} colorScheme="blue">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
