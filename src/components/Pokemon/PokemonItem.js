import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonItem = ({ _id, pokemon, url_image, attack, defense, type_1 }) => {
  return (
    <Link to={`/detail/${_id}`}>
      <h2>{pokemon}</h2>
      <img src={url_image} />
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Type: {type_1}</p>
    </Link>
  );
};

PokemonItem.propTypes = {
  _id: PropTypes.string.isRequired,
  pokemon: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  type_1: PropTypes.string.isRequired
};

export default PokemonItem;
