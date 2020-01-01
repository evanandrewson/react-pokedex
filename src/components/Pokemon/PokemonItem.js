import React from 'react';
import PropTypes from 'prop-types';

const PokemonItem = ({ pokemon, url_image, attack, defense, type_1 }) => {
  return (
    <div>
      <h2>{pokemon}</h2>
      <img src={url_image} />
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Type: {type_1}</p>
    </div>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  attack: PropTypes.string.isRequired,
  defense: PropTypes.string.isRequired,
  type_1: PropTypes.string.isRequired
};

export default PokemonItem;
