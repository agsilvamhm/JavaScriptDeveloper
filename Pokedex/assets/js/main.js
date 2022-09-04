function convertePokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlots) => {
        return `
        <li class="type">${typeSlots.type.name}</li>
        `
    })
}

function convertePokemonToLi(pokemon){
    return `
    <li class="pokemon">
        <span class="number">${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
        <ol class="types">
           ${convertePokemonTypesToLi(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>
    `
 }   

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertePokemonToLi).join('')
    })
   
