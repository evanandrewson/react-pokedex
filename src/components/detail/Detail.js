import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDetail } from '../../services/pokedex-api';

const Detail = ({ match }) => {
  const [data, updateData] = useState({});

  useEffect(() => {
    getDetail(match.params.id)
      .then(result => {
        updateData(result);
      });
  }, []);

  return (
    <div>
      <h1>{data.pokemon}</h1>
      <img src={data.url_image} />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Type 1: {data.type_1}</p>
      <p>Type 2: {data.type_2}</p>
      <p>Attack: {data.attack}</p>
      <p>Defense: {data.defense}</p>
      <p>HP: {data.hp}</p>
      <p>Speed: {data.speed}</p>
      <p>Special Attack: {data.special_attack}</p>
      <p>Special Defense: {data.special_defense}</p>
      <p>Ability 1: {data.ability_1}</p>
      <p>Ability 2: {data.ability_2}</p>
      <p>Hidden Ability: {data.ability_hidden}</p>
      <p>Egg Group 1: {data.egg_group_1}</p>
      <p>Egg Group 2: {data.egg_group_2}</p>
    </div>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default Detail;
