import React, { Component } from "react";

import Gif from "./Gif";

class GifList extends Component {

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} changeSelected={this.props.changeSelected} className="gif" />)
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }

}

export default GifList;
