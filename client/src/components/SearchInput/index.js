import React from "react";
import "./style.css";

function SearchInput({handleFormSubmit}) {
  return (
    <div className="searchInput">
      <form>
        <input className="display-4" type="Search" placeholder="type here" 
      onSubmit={event => handleFormSubmit(event)}
      ></input></form>
    </div>
  );
}

export default SearchInput;
