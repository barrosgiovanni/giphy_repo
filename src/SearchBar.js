// importing sass file to apply style to document ...
import "./App.scss";

import React from "react";

function SearchBar() {
  return (
    <div>
      <i class="fa-solid fa-magnifying-glass fa-4x"></i>
      <input type="text" className="form-search form-control" />
    </div>

  )
}

export default SearchBar;
