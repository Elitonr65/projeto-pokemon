import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, PokemonCard, PokemonImage, PokemonName } from '../../styles/styled-components/HomeStyles'
import Logo from '../Logo/Logo';

const PokemonList = ({ pokemons }) => {

    if (!Array.isArray(pokemons)) {
        return <div>Error: Data is not an array</div>
    }

    if (pokemons.length === 0) {
        return <div>No pokemons found</div>;
    }

    return (
        <div>
            <Logo />
            <HomeContainer>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id}>
                            <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                                <PokemonImage src={pokemon.image} alt={pokemon.name} />
                                <PokemonName>{pokemon.name}</PokemonName>
                            </Link>
                    </PokemonCard>
                ))}
            </HomeContainer>
        </div>
    );
};

export default PokemonList;