import React from "react";
import "./style.css";

function SearchInput({ handleOnChange, users }) {
  return (
    <div className="searchInput">
      <form>
        <input
          className="display-4"
          type="Search"
          placeholder="type here"
          onChange={(event) => handleOnChange(event)}
        ></input>
      </form>
    </div>
  );
}

export default SearchInput;
