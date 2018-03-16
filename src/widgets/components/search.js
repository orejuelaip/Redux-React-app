import React from 'react';
import './search.css'
function Search(props) {
  return (
      <form
        className="Search"
        onSubmit={props.handleSubmit}
      >
          <input
            ref={props.setRef}//referencias
            type="text"
            className="Search-input"
            placeholder="Buscar..."
            onChange={props.handleChange}
            value={props.value}
          />
      </form>
  )
}

export default Search
