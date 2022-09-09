let urlForm = 'https://pokeapi.co/api/v2/pokemon/'

const urlParam = new URLSearchParams(window.location.search);
let idPokemon = urlParam.get("id");

urlForm = urlForm + idPokemon

fetch(urlForm)
   .then(resposta => resposta.json())
   .then(function(dados){
      //  console.log(dados.name)
       // console.log(dados.types[0].type.name)
 
        let imagemFrente = document.getElementById("imagemFrente")
        let texto = document.getElementById("titulo")
   
        imagemFrente.src = dados.sprites.other.dream_world.front_default
        texto.innerHTML = dados.name.toUpperCase()
 
   })
   .catch(function(err){
        console.log(err)
   })

 
