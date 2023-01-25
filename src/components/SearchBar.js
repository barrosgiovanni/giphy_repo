import React, { Component } from "react";

class SearchBar extends Component {

  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div>
        <i className="fa-solid fa-magnifying-glass fa-4x"></i>
        <input type="text" className="form-search form-control" onChange={this.handleChange} />
      </div>
    )
  }

}

export default SearchBar;
