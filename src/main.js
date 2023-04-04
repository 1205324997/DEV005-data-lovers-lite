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
    const advContainer = document.createElement("article");
    const basicContainer = document.createElement("div");
    const subtitle = document.createElement("h2");
    const imgPokemon2 = document.createElement("img");
    const imgPokemon = document.createElement("img");
    const type = document.createElement("h4");
    const type1 = document.createElement("h3");
    const num = document.createElement("h1");
    const weaknesses = document.createElement("h3");
    const height = document.createElement("h3");
    const weight = document.createElement("h3");
    const region = document.createElement("h3")
    const close = document.createElement("button");


    close.textContent = 'X'
    region.textContent = 'Region: ' + pokemones.generation.name.charAt(0).toUpperCase() + pokemones.generation.name.slice(1);
    type.textContent = pokemones.type.join(" - ");// cambiamos el contenido por el dato y le agrego un guion para que separe los nombres
    type1.textContent = 'Tipo: ' + pokemones.type.join(" - ");
    num.textContent = pokemones.num
    subtitle.textContent = pokemones.name.charAt(0).toUpperCase() + pokemones.name.slice(1);//cambiamos de minuscula a mayuscula
    imgPokemon.setAttribute('src', pokemones.img);
    imgPokemon2.setAttribute('src', pokemones.img);
    weaknesses.textContent = 'Debilidades: ' + pokemones.weaknesses.join(' - ');
    height.textContent = 'Altura: ' + pokemones.size.height;
    weight.texContent = 'Peso: ' + pokemones.size.weight;

    basicContainer.appendChild(num)//agregamos a section los valores obtenidos con textContent
    basicContainer.appendChild(imgPokemon);
    basicContainer.appendChild(subtitle);
    basicContainer.appendChild(type);
    advContainer.appendChild(close);
    advContainer.appendChild(imgPokemon2);
    advContainer.appendChild(weaknesses);
    advContainer.appendChild(type1)
    advContainer.appendChild(height);
    advContainer.appendChild(weight);
    advContainer.appendChild(region);
    section.appendChild(basicContainer);
    section.appendChild(advContainer);
    root.appendChild(section);
    
    advContainer.style.display = "none";
    basicContainer.addEventListener("click", () =>{
      basicContainer.style.display = "none";
      advContainer.style.display = "block";

      close.addEventListener("click", () => {
        advContainer.style.display = "none";
        basicContainer.style.display = "block"
      })
    })
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



