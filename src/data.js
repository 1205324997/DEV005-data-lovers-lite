export const filterPokemon = (data, pokemonType) => {
  // aqui escribes el filtrado
  return data.filter(item => item.type.includes(pokemonType));
// aqui retornas el resultado de los pokemones filtrados
};

export const regionPokemon = (data, pokemonRegion) => {
  return data.filter(item => item.generation.name.includes(pokemonRegion));
};
  

export const sortOrder = (data)=>{
  return data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
}

export const reverOrder = (data)=>{
  return data.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  })
}


  