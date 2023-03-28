export const filterPokemon = (data, pokemonType) => {
  // puedes borrar/comentar los console.logs de aqui
 return data.filter(item => item.type == pokemonType);
 console.log(pokemonType)
// aqui escribes el filtrado
  
// aqui retornas el resultado de los pokemones filtrados
};
