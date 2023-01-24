// importing sass file to apply style to document ...
import "./App.scss";

import React from "react";

function Gif({id}) {

  const url = `https://media2.giphy.com/media/${id}/giphy.gif?cid=ecf05e47e94b24ac8346173264e08c710c852dfbec1512f0&rid=giphy.gif&ct=g`;

  return (
    <img src={url} alt="giphy" className="gif" />
  )

}

export default Gif;
