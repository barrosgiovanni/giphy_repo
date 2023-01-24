// importing sass file to apply style to document ...
import "./App.scss";

import React from "react";

import Gif from "./Gif";

function GifList({gifs}) {

  return (

    <div className="gif-list">

      {gifs.map(gif => {

        return <Gif id={gif.id} key={gif.id} className="gif" />

      })}

    </div>

  )

}

export default GifList;
