import React from 'react';
import logo from '../../assets/Pokemon-logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} />
      <h1>Pokedex</h1>
    </header>
  );
};

export default Header;
