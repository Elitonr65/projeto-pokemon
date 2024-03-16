import React from 'react';
import { Button } from '../../styles/styled-components/HomeStyles';

const LoadMoreButton = ({onClick}) => {
    return <Button onClick={onClick}>Carregar mais</Button>
};
 
export default LoadMoreButton;