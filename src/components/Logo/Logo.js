import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
    width: 200px;
    height: auto;
    top: 50px;
    left: 50px; 

    @media (max-width: 425px) {
        width: 140px;
    }
`;

const Logo = ({ alt }) => {
    return <LogoImage src="/image/pokemon_logo_PNG.png" alt={alt} />
};

export default Logo;