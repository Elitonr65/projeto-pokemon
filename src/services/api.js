
const BASE_URL = 'https://pokeapi.co/api/v2';
console.log('BASE_URL')

export const fetchPokemonsByType = async (type) => {
    try {
        const response = await fetch(`${BASE_URL}/type/${type}`);
        const data = await response.json();

        if (!data || !Array.isArray(data.pokemon)) {
            console.error('Resposta inválida da API');
            return [];
        }

        const pokemonNames = data.pokemon.map((pokemon) => pokemon.pokemon.name);
        const pokemonDetails = await Promise.all(
            pokemonNames.map(async (name) => {
                try {
                    const response = await fetch(`${BASE_URL}/pokemon/${name}`);
                    return await response.json();
                } catch (error) {
                    console.error(`Erro ao buscar detalhes do Pokemon ${name}: `, error);
                    return null; 
                }
            })
        );

        const validPokemonDetails = pokemonDetails.filter(pokemon => pokemon !== null);

        return validPokemonDetails.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        }));
    } catch (error) {
        console.error('Erro ao buscar os pokemons por tipo:', error);
        return []; 
    }
};

export const fetchPokemons = async (offset) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon?limit=10&offset=${offset}`);
        const data = await response.json();

        if (!data || !Array.isArray(data.results)) {
            console.error('Resposta inválida da API');
            return [];
        }

        return data.results.map((pokemon, index) => ({
            id: index + offset + 1,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + offset + 1}.png`,
        }));
    } catch (error) {
        console.error('Erro ao buscar os pokemons:', error);
        return []; 
    }
};

export const fetchPokemonDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${id}`);
        const data = await response.json();

        if (!data) {
            console.error('Dados do Pokémon não encontrados.');
            return null;
        }

        const moves = data.moves.map((move) => move.move.name);

        const abilities = await Promise.all(data.abilities.map(async (ability) => {
            const abilityResponse = await fetch(ability.ability.url);
            const abilityData = await abilityResponse.json();

            if (!abilityData.effect_entries || abilityData.effect_entries.length === 0) {
                console.error('Dados da habilidade não encontrados para', ability.ability.name);
                return {
                    name: ability.ability.name,
                    description: 'Descrição indisponível.',
                };
            }

            return {
                name: ability.ability.name,
                description: abilityData.effect_entries[0].effect,
            };
        }));

        return {
            id: data.id,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            moves,
            abilities,
            type: data.types.length > 0 ? data.types[0].type.name : 'Tipo não disponível',
        };
    } catch (error) {
        console.error('Erro ao buscar detalhes do Pokemon: ', error);
        throw error;
    }
};