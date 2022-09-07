const pokemonList = document.getElementById('pokemonList')
const loadMorebutton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0


function convertePokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlots) => {
        return `
        <li class="type">${typeSlots.type.name}</li>
        `
    })
}

function convertePokemonToLi(pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
        <ol class="types">
           ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
        </ol>
        <a href="./assets/pages/detalhes.html?${pokemon.number}" ><img src="${pokemon.photo}" alt="${pokemon.name}"></a>
        </div>
    </li>
    `
 }   

 loadPokemonItens(offset, limit)
 
 function loadPokemonItens(offset, limit){
     pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
         pokemonList.innerHTML += pokemons.map(convertePokemonToLi).join('')
     })
}

loadMorebutton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNexPage = offset + limit

    if (qtdRecordNexPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMorebutton.parentElement.removeChild(loadMorebutton)
    } else {
        loadPokemonItens(offset, limit)
    }
})