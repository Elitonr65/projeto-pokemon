import React, { useContext, useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { fetchPokemons, fetchPokemonsByType } from '../../services/api';
import { HomeStyle, SelecteWrapper } from '../../styles/styled-components/HomeStyles';
import LoadMoreButton from '../buttons/LoadMoreButton';
import { ThemeContext } from '../../context/ThemeContext';


const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [offset] = useState(0);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        loadPokemons();
    }, [offset, selectedType]);

    const loadPokemons = async () => {
        let newPokemons = [];
        if (selectedType === '') {
            newPokemons = await fetchPokemons(offset) || [];
        } else {
            newPokemons = await fetchPokemonsByType(selectedType) || [];

        }


        setPokemons(newPokemons);
    };

    const handleTypeChenge = (event) => {
        setSelectedType(event.target.value);
    }

    const handleLoadMore = async () => {
        const newPokemons = await fetchPokemons(offset + pokemons.length) || [];
        setPokemons(prevPokemons => [...prevPokemons, ...newPokemons]);
    };

    const { theme } = useContext(ThemeContext)

    return (
        <HomeStyle
            style={{ color: theme.color, backgroundColor: theme.background }}>

            <SelecteWrapper>
                <label htmlFor='pokemonType'>Pokémon Filtro </label>

                <select id="pokemonType" value={selectedType} onChange={handleTypeChenge}>
                    <option value="">Todos</option>
                    <option value="grass">Grass</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="fighting">Fighting</option>
                    <option value="water">Water</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="electric">Electric</option>
                    <option value="ground">Ground</option>
                    <option value="psychic">Psychic</option>
                    <option value="rock">Rock</option>
                    <option value="ice">Ice</option>
                    <option value="bug">Bug</option>
                    <option value="dragon">Dragon</option>
                    <option value="ghost">Ghost</option>
                    <option value="dark">Dark</option>
                    <option value="steel">Steel</option>
                    <option value="fairy">Fairy</option>
                </select>
            </SelecteWrapper>
            <PokemonList pokemons={pokemons} />
            <LoadMoreButton onClick={handleLoadMore} />
        </HomeStyle>
    )
};

export default Home;
