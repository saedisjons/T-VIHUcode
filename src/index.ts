import { getPokemon } from "./getPokemon.js";

async function main() {
    const pokemon = await getPokemon('larvitar');
    console.log(pokemon);
}

main();