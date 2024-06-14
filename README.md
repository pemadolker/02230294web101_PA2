# POKEDEX WEBPAGE

## INTRODUCTION
This is a Pokedex Webpage Project where a comprehensive and interactive Pokedex is developed using the React framework. By working on building this pokedex, I have gained expereince in building modern web applications, managing state, and integrating APIs. The Pokedex webpage allows us to serach for the Pokemons, view it's details, catch the Pokemons and keep track of the Pokemon we have caught.

## Requirements and Implementation

### 1. SEARCH FEATURE

Implement a search feature that allows users to search for Pokemon by name or other
relevant criteria. This will involve making API calls to a Pokemon-related API, such as the
official PokeAPI, to fetch data about the searched Pokemon.

### Implementation:

- Used the fetch API to make GET requests to the PokeAPI.
- Created a search input component where users can enter the name of the Pokemon they want to search.
- On search submission, fetched data from the PokeAPI based on the input and displayed the Pokemon details.

### 2. DISPLAY POKEMON DETAILS 

When a user searches for a Pokemon, your webpage should display the relevant details of
the searched Pokemon. This may include information such as the Pokemon's name, type,
abilities, stats, and an image. On a new page or modal?

### Implementation:

- Developed a detailed Pokemon component to display the fetched Pokemon data.
- Used React Router to navigate to a new page that displays the detailed information of the searched Pokemon.
- Ensured only the required data is fetched from the API and displayed.

### 3. CATCH POKEMON FEATURE 

Implement a feature that allows users to "catch" Pokemon and keep track of the Pokemon
they have caught. This functionality should utilize state management to store and manage
the list of caught Pokemon. For managing the state of caught Pokemon, use
the Zustand library. 
### Implementation:

- Integrated Zustand for state management.
- Created a global state to manage the list of caught Pokemon.
- Added a "Catch" button to the Pokemon details component, which updates the state when clicked.
Displayed the list of caught Pokemon on a separate component/page.

### 4. COMPONENT-BASED ARCHITECTURE

The webpage should be built using React's component-based architecture, where different
functionalities and UI elements are separated into reusable components. This promotes
code modularity, maintainability, and reusability.

### Implementation:

- Structured the project into multiple reusable components such as SearchBar, PokemonDetails, CaughtPokemonList, etc.
- Ensured each component has a single responsibility and data is passed through props.

### 5. API INTEGRATION 
Integrate with a Pokemon API, such as the official PokeAPI, to fetch data about specific Pokemon or lists of Pokemon. Use only the fetch API for this integration.

### Implementation:

- Made asynchronous fetch requests to the PokeAPI to retrieve Pokemon data.
- Handled API responses and errors effectively to ensure smooth user experience.
- 
### 6. UI COMPONENT LIBRARY
Use the specified UI component library (https://ui.shadcn.com/) for building the user interface.

### Implementation:

- Incorporated components from the ShadCN UI library to build a visually appealing and consistent user interface.

###  Script

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

