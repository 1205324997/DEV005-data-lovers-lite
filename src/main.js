import data from './data/pokemon/pokemon.js';
import { filterPokemon, namePokemon, sortOrder, reverOrder, regionPokemon } from './data.js';

//console.log(regionPokemon(data.pokemon, "kanto"));
//console.log(sortOrder(data.pokemon));
//console.log(reverOrder(data.pokemon));

function makeHtmlPokemons(allData) {
  const root = document.getElementById("root")
  root.innerHTML = " ";

  allData.forEach((pokemones) => {
    const section = document.createElement("section");
    const subtitle = document.createElement("h2");
    const imgPokemon = document.createElement("img");
    const type = document.createElement("h3");
    const num = document.createElement("h1");

    type.textContent = pokemones.type.join(" - ");
    num.textContent = pokemones.num
    subtitle.textContent = pokemones.name.toUpperCase();
    imgPokemon.setAttribute('src', pokemones.img);

    section.appendChild(num)
    section.appendChild(imgPokemon);
    section.appendChild(subtitle);
    section.appendChild(type)
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

const regionfilterPokemon = document.getElementById("region")
regionfilterPokemon.addEventListener("change", (e) => {
  const selectRegion = e.target.value
  if (selectRegion) {
    const filterRegion = regionPokemon(data.pokemon, selectRegion);
    makeHtmlPokemons(filterRegion)
  }
})

const orderPokemon = document.getElementById("order")
orderPokemon.addEventListener("change", (event) => {
  const orderSelect = event.target.value
  if (orderSelect === "A-Z") {
    const filterSortAZ = sortOrder(data.pokemon, orderSelect)
    makeHtmlPokemons(filterSortAZ);
  }
  if (orderSelect === "Z-A") {
    const filterSortAZ = reverOrder(data.pokemon, orderSelect)
    makeHtmlPokemons(filterSortAZ);
  }
})

const search = document.getElementById("searchBtn")
search.addEventListener("keyup", (e) =>{
  const searchPokemon = e.target.value;
  const pokemonsSearch = namePokemon(data.pokemon, searchPokemon)
  makeHtmlPokemons(pokemonsSearch)
});

// muestra los pokemons de la data original en mi linea html
makeHtmlPokemons(data.pokemon);



