import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const CheckboxInput = styled.input`
  -webkit-appearance: none;
  visibility: hidden;
  display: none;
`;

export const Checkmark = styled.span`
  position: relative;
  display: block;
  margin: 3px 0 3px 3px;
  width: 50px;
  height: 25px;
  background-color: ${props => props.theme.background};
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  transition: ease-in 0.5s;
`;

export const CheckmarkBefore = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  background: #000;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.5s;
  transform: ${props => props.checked ? 'translateX(-50px)' : 'none'};
`;

export const CheckmarkAfter = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  background: #f6e652;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.5s;
  transform: ${props => props.checked ? 'none' : 'translateX(50px)'};

`;