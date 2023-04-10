// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons(pokemonArray) {
    // Filter the pokemonArray to only include pokemons with type "Fire"
    const firePokemons = pokemonArray.filter(pokemon => pokemon.type.includes("Fire"));
    return firePokemons;
  }
  // Call the function with the example array of pokemons
  const firePokemons = getAllFirePokemons(pokemons);

  console.log(firePokemons);

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

// Function to find the shortest pokemon
function shortestPokemon(arr) {
    if (arr.length === 0) {
      return 0; // Return 0 if the array is empty
    }
    // Create a new array of objects with name and height properties
    const nameHeightArr = arr.map(pokemon => {
      return { name: pokemon.name, height: parseFloat(pokemon.height) };
    });
    // Sort the array based on the height property
    nameHeightArr.sort((a, b) => a.height - b.height);
    // Return the name of the first (shortest) Pokemon
    return nameHeightArr[0].name;
  }

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemonArray) {
  if (pokemonArray.length === 0) {
    // Check if the array is empty
    return 0; // Return 0 if there are no pokemons
  }

  const filteredPokemons = pokemonArray.filter(pokemon => typeof pokemon.candy_count === 'number');
  // Filter out pokemons that do not have a valid candy_count property

  if (filteredPokemons.length === 0) {
    // Check if all pokemons do not have candy_count
    return 0; // Return 0 if no pokemon has a valid candy_count
  }

  const totalCandyCount = filteredPokemons.reduce((acc, pokemon) => acc + pokemon.candy_count, 0);
  // Calculate the sum of candy_count for filtered pokemons

  const averageCandyCount = totalCandyCount / filteredPokemons.length;
  // Calculate the average by dividing the total by the number of filtered pokemons

  if (isNaN(averageCandyCount)) {
    // Check if the average is NaN (e.g., when there are no valid candy_count values)
    return 0; // Return 0 if the average is NaN
  }

  // Round the average to 2 decimal places and return it
  return Number(averageCandyCount.toFixed(2));
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemonArray) {
    // Check if the array is empty
    if (pokemonArray.length === 0) {
      return 0; // Return 0 if there are no pokemons
    }
  
    // Use filter() to get the first 10 Ground type pokemons
    const groundPokemons = pokemonArray.filter(pokemon => pokemon.type.includes('Ground')).slice(0, 10);
  
    // Use map() to get the 'img' property of each Ground type pokemon
    const pokeImgs = groundPokemons.map(pokemon => pokemon.img);
  
    return pokeImgs;
  }  

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemonArray) {
    if (pokemonArray.length === 0) {
      return 0;
    }
    const pikachuWeight = pokemonArray.find(pokemon => pokemon.name === 'Pikachu').weight;
    const heavyPokemons = pokemonArray.filter(pokemon => pokemon.weight > pikachuWeight).map(pokemon => pokemon.name);
  
    return heavyPokemons;
  }

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemonArray) {
    // Step 1: Sort the pokemonArray alphabetically based on their name
    const sortedPokemons = pokemonArray.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  
    // Step 2: Slice the sortedPokemons array to get the top 20 pokemons
    const top20Pokemons = sortedPokemons.slice(0, 20);
  
    // Step 3: Create a new array containing only the names of the pokemons
    const pokemonNames = top20Pokemons.map(function(pokemon) {
      return pokemon.name;
    });

    // Step 4: Return the pokemonNames array with the names of the top 20 pokemons
    return pokemonNames; 
}
  // Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

  function strongPokemons(pokemonArray) {
    const strongPokemonNames = [];
    for (let i = 0; i < pokemonArray.length; i++) {
      const pokemon = pokemonArray[i];
    }
    return strongPokemonNames;
  }
  function strongPokemons(pokemonArray) {
    const strongPokemonNames = pokemonArray
    .filter(pokemon => pokemon.weaknesses.length === 1)
    .map(pokemon => pokemon.name)
    .slice(0, 15);
    return strongPokemonNames;
  }