import React, { useEffect, useState } from 'react';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import { fetchPokemonDetails } from '../../services/api';
import { useParams } from 'react-router-dom';


const PokemonDetailsPage = () => {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getPokemonDetails = async () => {
            const details = await fetchPokemonDetails(id);
            setPokemon(details);

        };

        getPokemonDetails();
    }, [id]);

    return (
        <div>
            {pokemon && (
                <>
                    <PokemonDetails pokemon={pokemon} />
                </>
            )}
        </div>
    );
};

export default PokemonDetailsPage;