import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    margin: 10px;


`;

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
`
export const SelecteWrapper = styled.div`
    margin-bottom: 20px;
    position: absolute;
    top: 30px;
    right: 10px;
    z-index: 1;

    label {
        margin-right: 10px;
        text-transform: uppercase;
        font-size: 13px;
        color: #333;
        font-weight: bold;

    }
 
    select {
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc
        cursor: pointer;
        background-color: #ddd;
        color: #333;
        font-size: 12px;

        &:hover {
            transform: scale(1.05);

    
        }
    }

    @media (max-width: 425px) {
        right: 5px;
        
        label {
            font-size: 11px;
        }
        select {
            font-size: 10px;
        }
    }
`

export const Button = styled.button`
    display: flex;
    flex-direction: center;
    font-weight: bold;
    justify-content: center;
    background-color: #3498db;
    color: #ddd;
    padding: 9px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 18vh;
    margin-bottom: 15px;
    margin-top: 15px;

    &:hover {
        background-color: '#0056b3';
        transform: scale(1.05);

    }
`;

export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    text-transform: uppercase;
    max-width: 90px;
    height: auto;
    background-color: #f2f2f2;
  
    &:hover {
        transform: scale(1.05);
    }

    * {
        text-decoration: none;
        color: #333;
        font-weight: bold;
    }

    @media (max-width: 425px) {
        max-width: 100%;
        padding: 5px;
        margin: 5px;
    }
  
`;

export const PokemonImage = styled.img`
    max-width: 100px;
    height: auto;
    margin-bottom: 8px;
`;

export const PokemonName = styled.h3`
    font-size: 13px;
    margin-bottom: 8px;
`;