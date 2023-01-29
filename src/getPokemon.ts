interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    abilities: Array<{ ability: { name: string; } }>;
    stats: Array<{ base_stat: number; stat: { name: string; } }>;
}

const API = 'https://pokeapi.co/api/v2/pokemon/';
    
export async function getPokemon(name: string): Promise<Pokemon> {
    const response = await fetch(`${API}${name}`);
    const pokemon = await response.json();
    return pokemon as Pokemon;
}