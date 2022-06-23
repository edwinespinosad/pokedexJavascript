
getPokemon();
setInterval(getPokemon, 30000);

function getPokemon() {
    let id = Math.floor(Math.random() * (600 - 1 + 1)) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => createPokemon(data))
}

function createPokemon(pokemon) {
    const img = document.getElementById('imgPokemon');
    img.src = pokemon.sprites.front_default;

    const cardTitle = document.getElementById('nomPokemon');
    cardTitle.textContent = pokemon.name;

}


