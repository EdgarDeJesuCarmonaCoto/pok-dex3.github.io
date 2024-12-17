let value1=1;
let value2 = 20;
const card= document.getElementById("carta");
const footer= document.getElementById("footer");


function buscarPokemon(){
    for(let i=value1;i<=value2;i++){
        let url=`https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url)
        .then(response => response.json())
        .then(response => mostrarPokemon(response,i))
        .catch(error=>mostrarError(error));
    }
    value1=value2+1;
    value2=value2+20;
    footer.innerHTML=`
    <button onclick="cargarMas()">Cargar mas pokémones</button>
    `
}

function buscarPokemonConInput(){
    let input= document.getElementById("pokemonInput").value.trim().toLowerCase();
    if(input===""){
        value1=1;
        value2=20;
        card.innerHTML="";
        buscarPokemon();
    }
    else{
    let url =`https://pokeapi.co/api/v2/pokemon/${input}`;
    fetch(url)
    .then(response => response.json())
    .then(response => mostraPokemonSolo(response,input))
    .catch(error=> mostrarError(error))
    }
}
function mostraPokemonSolo(dataPokemon,position){
    card.innerHTML=`
    <a href="pokemonSolo.html?id=${position}" class="card">
    <div class="content">
            <h2><p class="nombre">${dataPokemon.name.toUpperCase()}</p></h2>
            <img src="${dataPokemon.sprites.other["official-artwork"].front_default}">
            <p class="id">Numero:${dataPokemon.id}</p>
    </div>
    </a>
    `;
    footer.innerHTML="";

}
function mostrarPokemon(dataPokemon,position){
    card.innerHTML+=`
    <a href="pokemonSolo.html?id=${position}" class="card">
    <div class="content">
            <h2><p class="nombre">${dataPokemon.name.toUpperCase()}</p></h2>
            <img src="${dataPokemon.sprites.other["official-artwork"].front_default}">
            <p class="id">Numero:${dataPokemon.id}</p>
    </div>
    </a>
    `
}
function mostrarError(){
    card.innerHTML=`
    <p class="error">No existe ese pokémon</p>
    `
}
window.onload=function(){
    buscarPokemon();
}

function cargarMas(){
    buscarPokemon();
}