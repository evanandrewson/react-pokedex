import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchForm = ({ match }) => {
  const [search, updateSearch] = useState(match.params.search);
  return (
    <form>
      <input type='text' placeholder='search' value={search} onChange={event => updateSearch(event.target.value)} />
      <Link to={`/${search}/${match.params.page}`}>
        <button>🔍</button>
      </Link>
    </form>
  );
};

SearchForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
      search: PropTypes.string
    }).isRequired
  })
};

export default SearchForm;
