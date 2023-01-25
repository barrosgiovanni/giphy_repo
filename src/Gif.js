import React, { Component } from "react";

class Gif extends Component {

  handleClick = (event) => {
    console.log(event);
  }

  render() {

    const url = `https://media2.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47e94b24ac8346173264e08c710c852dfbec1512f0&rid=giphy.gif&ct=g`;

    return (

      <img src={url} alt="giphy" className="gif" onClick={this.handleClick} />

    )

  }

}

export default Gif;
