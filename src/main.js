import data from './data/pokemon/pokemon.js';
import { filterPokemon} from './data.js';


const root = document.getElementById("root")

function verType(){
data.pokemon.forEach((pokemones)=>{
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


const typePokemon = document.getElementById ("type")
typePokemon.addEventListener("change", (event) =>{
const selectPokemon = event.target.value
if(selectPokemon){
data.pokemon = filterPokemon(data.pokemon, selectPokemon)
verType(filterPokemon(data.pokemon, selectPokemon))
}
});
