import React, { useEffect, useState } from 'react';
import PokemonList from '../components/Pokemon/PokemonList';
import { getPokemon } from '../services/pokedex-api';

const AllPokemon = () => {
  const [list, updateList] = useState([]);
  const [page, updatePage] = useState(1);

  useEffect(() => {
    getPokemon(page)
      .then(result => {
        updateList(result.results);
      });
  }, []);
  return (
    <>
      <PokemonList list={list} />
      <button onClick={() => updatePage(page + 1)}>+</button>
      <button onClick={() => updatePage(page - 1)}>-</button>
    </>
  );
};

export default AllPokemon;
