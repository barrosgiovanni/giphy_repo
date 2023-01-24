// importing sass file to apply style to document ...
import "./App.scss";

import React from "react";

import SearchBar from "./SearchBar";
import Gif from "./Gif";
import GifList from "./GifList";

function App() {

  const gifs = [
    { id: 'R6gvnAxj2ISzJdbA63' },
    { id: 'nQ6re8HGu87uxVa7Sp' }
  ];

  return (

    <div>

      <div className="left-scene">

        <SearchBar />

        <div className="selected-gif">

          <Gif id="R6gvnAxj2ISzJdbA63"/>

        </div>

      </div>

      <div className="right-scene">

        <GifList gifs={gifs} className="gif-list"/>

      </div>
      
    </div>

  )

}

export default App;
