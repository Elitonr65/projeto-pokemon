import React, { useState } from 'react';
import { ButtonMoveStyle } from '../../styles/styled-components/PokemonDetailsStyles';



const ShowAllMovesButton = ({ onClick }) => {
    const [buttonText, setButtonText] = useState('Mais Movimentos');
    const handleButtonClick = () => {
        onClick();
        setButtonText((prevText) => (prevText === 'Mais Movimentos' ? 'Menos Movimentos' : 'Mais Movimentos'));
    };

    return <ButtonMoveStyle onClick={handleButtonClick}>{buttonText}</ButtonMoveStyle>
};

export default ShowAllMovesButton;
