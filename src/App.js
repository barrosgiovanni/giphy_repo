
import "./App.scss";

import React, { Component } from "react";

import SearchBar from "./components/SearchBar";
import Gif from "./components/Gif";
import GifList from "./components/GifList";
import giphy from "./images/Poweredby_100px-White_VertText.png";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "R6gvnAxj2ISzJdbA63"
    }
    this.search = this.search.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
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

  changeSelected(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
          <img className='attribution-mark' src={giphy} alt='powered by giphy'/>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} className="gif-list" changeSelected={this.changeSelected} />
        </div>
      </div>
    )
  }

}

export default App;
