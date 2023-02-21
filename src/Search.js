import React from "react";

function Search(props) {
  function handleSearch(e) {
    props.searchKeyword(e.target.value);
  }
  return (
    <>
      <input
        className="input-field"
        type="text"
        value={props.term}
        placeholder="Search Book by Title or by Author"
        onChange={handleSearch}
      ></input>
    </>
  );
}
export default Search;
