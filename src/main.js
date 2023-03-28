import data from './data/pokemon/pokemon.js';
import { filterPokemon } from './data.js';




function makeHtmlPokemons(allData) {
  const root = document.getElementById("root")
  root.innerHTML = " ";

  allData.forEach((pokemones) => {
    const section = document.createElement("section");
    const subtitle = document.createElement("h2");
    const imgPokemon = document.createElement("img");

    subtitle.textContent = pokemones.name;
    imgPokemon.setAttribute('src', pokemones.img);

    section.appendChild(imgPokemon);
    section.appendChild(subtitle);
    root.appendChild(section)
  })
}


const typePokemon = document.getElementById("type")
typePokemon.addEventListener("change", (event) => {
  const selectPokemon = event.target.value
  if (selectPokemon) {
    //filtra los pokemons de la data original
    const datafiltradaportipo = filterPokemon(data.pokemon, selectPokemon)
    //Muestra los pokemons filtrados
    makeHtmlPokemons(datafiltradaportipo)
  }
});

// aqui empieza el sort
//

// muestra los pokemons de la data original en mi linea html
makeHtmlPokemons(data.pokemon)
