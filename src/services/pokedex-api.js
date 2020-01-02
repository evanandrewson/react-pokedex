const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function getPokemon(page, search) {

  const url = `${URL}?page=${page || 1}&perPage=20&pokemon=${search || ''}`;

  return fetch(url)
    .then(response => response.json());
}

export function getDetail(id) {
  const url = `${URL}/${id}`;

  return fetch(url)
    .then(response => response.json());
}
