export const filterPokemon = (data, pokemonType) => {
 // aqui escribes el filtrado
 return data.filter(item => item.type == pokemonType);
// aqui retornas el resultado de los pokemones filtrados
};


