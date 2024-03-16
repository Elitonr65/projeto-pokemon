import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
    margin: 10px 10px;

    *{
        text-decoration: none;
    }
`;

export const PokemonImage = styled.img`
    width: 350px;
    height: 250px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
    image-rendering: auto; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

`;

export const PokemonName = styled.h2`
    margin: 5px;
    font-size: 35px;
    font-weight: bold;
`;

export const MoveList = styled.ul`
    list-style: katakana-iroha;
    padding: 0;
    margin-bottom: 20px;
    column-count: 3;
    column-gap: 50px;

    li {
        margin-bottom: 5px
        font-weight: bold;

    }
`;


export const AbilitiesList = styled.ul`
     list-style: hebrew;
     padding: 0;
     margin-bottom: 20px;

     li {
        margin-bottom: 5px;
     }
`;

export const TypeLabel = styled.p`
  font-weight: bold;
`;

export const ButtonMoveStyle = styled.button`
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
    width: 23vh;
    margin-bottom: 15px;
    margin-top: 15px;

    &:hover {
    background-color: #2980b9;
    }
`;

export const VoltarButton = styled.button`
    display: flex;
    justify-content: center;
    background-color: #3498db;
    color: #ddd;
    padding: 5px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 11vh;
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;

    &:hover {
    background-color: #2980b9;
    }

    *{
        text-decoration: none;
    }

   
`




