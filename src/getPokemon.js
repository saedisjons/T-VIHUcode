const API = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemon(name) {
    const pokemon = await fetch(`${API}${name}`);
    //const pokemon = await response.json();
    return pokemon;
}