import React from 'react';

const Search = (props) => {
  const { handleSearch } = props;

  return (
    <div className="col-sm-6 offset-sm-3">
        <input type="text" onChange={(e) => handleSearch(e.target.value)} className="form-control" placeholder="Search" />
    </div>
  )
}

export default Search;