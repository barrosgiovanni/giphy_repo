// importing sass file to apply style to document ...
import "./App.scss";

import React from "react";

import SearchBar from "./SearchBar";
import Gif from "./Gif";

function App() {

  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="R6gvnAxj2ISzJdbA63"/>
        </div>
      </div>
      <div className="right-scene"></div>
    </div>
  )

}

export default App;
