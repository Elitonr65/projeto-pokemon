import React from 'react';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetailsPage from './components/pages/PokemonDetailsPage';
import { ThemeProvider } from './context/ThemeContext'
import { ThemeTogglerButton } from './components/Theme-toggler-button/ThemeTogglerButton';



function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
