import data from './data/pokemon/pokemon.js';
import { filterPokemon, namePokemon, sortOrder, reverOrder, regionPokemon } from './data.js';

//console.log(regionPokemon(data.pokemon, "kanto"));
//console.log(sortOrder(data.pokemon));
//console.log(reverOrder(data.pokemon));

function makeHtmlPokemons(allData) {
  const root = document.getElementById("root");
  root.innerHTML = " ";// Le decimosm que reemplace por el nuevo evento

  allData.forEach((pokemones) => {//Realiamos el recorrido de la data
    const section = document.createElement("section");//creamos un nuevo elemento para guardar los datos obtenidos
    const subtitle = document.createElement("h2");
    const imgPokemon = document.createElement("img");
    const type = document.createElement("h3");
    const num = document.createElement("h1");

    type.textContent = pokemones.type.join(" - ");// cambiamos el contenido por el dato y le agrego un guion para que separe los nombres
    num.textContent = pokemones.num
    subtitle.textContent = pokemones.name.toUpperCase();//cambiamos de minuscula a mayuscula
    imgPokemon.setAttribute('src', pokemones.img);

    section.appendChild(num)//agregamos a section los valores obtenidos con textContent
    section.appendChild(imgPokemon);
    section.appendChild(subtitle);
    section.appendChild(type);
    root.appendChild(section);
  })
}

const typePokemon = document.getElementById("type");
typePokemon.addEventListener("change", (event) => {//creamos un evento para cambiar los valores
  const selectPokemon = event.target.value
  if (selectPokemon) {
    //filtra los pokemons de la data original
    const datafiltradaportipo = filterPokemon(data.pokemon, selectPokemon);
    //Muestra los pokemons filtrados
    makeHtmlPokemons(datafiltradaportipo);
  }
});

const regionfilterPokemon = document.getElementById("region");
regionfilterPokemon.addEventListener("change", (e) => {
  const selectRegion = e.target.value
  if (selectRegion) {
    const filterRegion = regionPokemon(data.pokemon, selectRegion);
    makeHtmlPokemons(filterRegion);
  }
})

const orderPokemon = document.getElementById("order");
orderPokemon.addEventListener("change", (event) => {
  const orderSelect = event.target.value
  if (orderSelect === "A-Z") {//Creamos una sentencia si order es igual a el selector a-z nos debuelven ordenado en forma decendente
    const filterSortAZ = sortOrder(data.pokemon, orderSelect);
    makeHtmlPokemons(filterSortAZ);//Mostramos ordenados
  }
  if (orderSelect === "Z-A") {//Creamos una sentencia si order es igual a el selector z-a nos debuelven ordenado en forma acendente
    const filterSortAZ = reverOrder(data.pokemon, orderSelect);
    makeHtmlPokemons(filterSortAZ);
  }
})

const search = document.getElementById("searchBtn");
search.addEventListener("keyup", (e) =>{//Creamos un evento cuando deje de escribir
  const searchPokemon = e.target.value;
  const pokemonsSearch = namePokemon(data.pokemon, searchPokemon);
  makeHtmlPokemons(pokemonsSearch);
});

// muestra los pokemons de la data original en mi linea html
makeHtmlPokemons(data.pokemon);



