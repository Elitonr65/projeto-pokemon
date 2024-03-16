import React, { useContext } from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";
import ButtonTheme from "../buttons/Button";

export const ThemeTogglerButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)   
   

    return (
        <div>
            <ButtonTheme onClick={toggleTheme} checked={theme === themes.dark} />
        </div >
    );
};