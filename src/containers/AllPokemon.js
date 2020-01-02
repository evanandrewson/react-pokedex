import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonList from '../components/Pokemon/PokemonList';
import { getPokemon } from '../services/pokedex-api';
import PropTypes from 'prop-types';

const AllPokemon = ({ match }) => {
  const [list, updateList] = useState([]);
  const [maxPage, updateMaxPage] = useState();

  useEffect(() => {
    getPokemon(match.params.page)
      .then(result => {
        updateList(result.results);
        updateMaxPage(Math.floor(result.count / result.perPage + 1))
      });
  }, [match.params]);
  return (
    <>
      <PokemonList list={list} />
      <Link to={+match.params.page < maxPage ? `/${+match.params.page + 1}` : `/${maxPage}`}>
        <button>+</button>
      </Link>
      <Link to={+match.params.page === 1 ? '/1' : `/${+match.params.page - 1}`}>
        <button>-</button>
      </Link>
    </>
  );
};

AllPokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.number,

    })
  })
};

export default AllPokemon;
