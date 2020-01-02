import React from 'react';
import PropTypes from 'prop-types';
import PokemonItem from './PokemonItem';

const PokemonList = ({ list }) => {
  const elements = list.map(element => {
    return <PokemonItem {...element} key={element.pokemon} />;
  });
  return (
    <ul>
      {elements}
    </ul>
  );
};

PokemonList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    pokemon: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    type_1: PropTypes.string.isRequired
  })).isRequired
};

export default PokemonList;
