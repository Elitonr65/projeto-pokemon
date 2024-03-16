import { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';


export const themes = {
    light: {
        color: '#000',
        background: '#f6e652'
    },
    dark: {
        color: '#f6e652',
        background: '#000'
    },
};

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {}
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <StyledThemeProvider theme={theme}>
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
};