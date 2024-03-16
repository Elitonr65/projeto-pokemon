import React from 'react';
import { CheckboxInput, CheckboxContainer, Checkmark, CheckmarkAfter, CheckmarkBefore } from '../../styles/styled-components/Button';

const ButtonTheme = ({checked, onClick}) => {
    return (
      <CheckboxContainer>
        <label>
          <CheckboxInput type='checkbox' onClick={onClick}/>
          <Checkmark>
            <CheckmarkBefore checked={checked}/>
            <CheckmarkAfter checked={checked}/>
          </Checkmark>
        </label>
      </CheckboxContainer>
    );
};
  
export default ButtonTheme;