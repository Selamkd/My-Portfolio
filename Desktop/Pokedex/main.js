document.addEventListener("DOMContentLoaded", function () {
    console.log('linked?')
    const searchInput = document.querySelector(".search-input");
    const pokemonImage = document.getElementById("pokemon-image");
    const pokemonName = document.getElementById("pokemon-name");
    console.log(pokemonName);
    const pokemonType = document.getElementById("pokemon-type");
    console.log(pokemonType);
    const pokemonHP = document.getElementById("pokemon-hp");
    console.log(pokemonHP)
    const pokemonAttack = document.getElementById("pokemon-attack");
    const pokemonSpeed = document.getElementById("pokemon-speed");

    async function searchPokemon(pokeName) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName);
        if (!pokeName) {
            // If the search term is empty, display a placeholder message
            pokemonName.textContent = "Mimikyu";
            return;
        }
        if (!response.ok) {
            console.error(`Status:${response.status}`)
            console.error(`Text: ${await response.text()}`);
            console.error('Data not available')
            return;
        }

        const pokeData = await response.json();
        console.log(pokeData);

        pokemonName.textContent = pokeData.name;
        pokemonType.textContent = ` ${pokeData.types.map(type => type.type.name).join(", ")}`
        pokemonHP.textContent = `HP: ${pokeData.stats[0].base_stat}`
        pokemonSpeed.textContent = `Speed: ${pokeData.stats[5].base_stat}`;
        pokemonAttack.textContent = `Attack: ${pokeData.stats[1].base_stat}`;

        // Display Image 
        pokemonImage.src = pokeData.sprites.front_default;
    }

    // Add an event listener for the search input
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            searchPokemon(searchTerm);
        }
    });

    // Initial search with an empty string
    searchPokemon('');
});