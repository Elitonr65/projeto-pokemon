import React, { useContext, useState } from 'react';
import { AbilitiesList, DetailsContainer, MoveList, PokemonImage, PokemonName, TypeLabel, VoltarButton } from '../../styles/styled-components/PokemonDetailsStyles';
import ShowAllMovesButton from '../buttons/ShowMoreAllMovesButton';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';



const PokemonDetails = ({ pokemon }) => {
    const [showAllMoves, setShowAllMoves] = useState(false);
    const handleShowMovesToggle = () => {
        setShowAllMoves((prevShowAllMoves) => !prevShowAllMoves);
    };

    const { theme } = useContext(ThemeContext)

    return (
        <div style={{ color: theme.color, backgroundColor: theme.background }}>
            <Logo />
           
            <DetailsContainer>
                <Link to="/">
                    <VoltarButton>Home</VoltarButton>
                </Link>
                <PokemonImage src={pokemon.image} alt={pokemon.name} />
                <PokemonName>{pokemon.name}</PokemonName>
                <h3>Movimentos:</h3>
                <MoveList>
                    {showAllMoves
                        ? pokemon.moves.map((move) => <li key={move}>{move}</li>)
                        : pokemon.moves.slice(0, 6).map((move) => <li key={move}>{move}</li>)}
                </MoveList>
                {pokemon.moves.length > 6 && (
                    <ShowAllMovesButton onClick={handleShowMovesToggle}>
                        {showAllMoves ? 'Menos Movimentos' : 'Mais Movimentos'}
                    </ShowAllMovesButton>
                )}
                <h3>Habilidades:</h3>
                <AbilitiesList>
                    {pokemon.abilities.map((ability) => (
                        <li key={ability.name}>
                            {ability.name} - {ability.description || ''}
                        </li>
                    ))}
                </AbilitiesList>
                <h3>Tipo</h3>
                <TypeLabel>{pokemon.type}</TypeLabel>
            </DetailsContainer>
        </div>
    );
};

export default PokemonDetails;