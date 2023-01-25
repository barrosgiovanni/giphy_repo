// importing sass file to apply style to document ...
import "./App.scss";

import React, { Component } from "react";

import SearchBar from "./SearchBar";
import Gif from "./Gif";
import GifList from "./GifList";

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "R6gvnAxj2ISzJdbA63"
    }

    this.search('gif');

  }

  search = (query) => {

    const giphy = require('giphy-api')('vbE8wLQX2RbL6INhqnu8LWqoWvueR25y');

    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, response) => {
      this.setState({
        gifs: response.data
      });
    });

  }

  changeSelected = () => {

    // this.setState({
    // selectedGifId: 'newid'
    //})

  }

  render() {

    return (

      <div>

        <div className="left-scene">

          <SearchBar searchFunction={this.search} />

          <div className="selected-gif">

            <Gif id={this.state.selectedGifId} />

          </div>

        </div>

        <div className="right-scene">

          <GifList gifs={this.state.gifs} className="gif-list"/>

        </div>

      </div>

    )

  }

}

export default App;
