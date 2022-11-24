import React, { Component } from "react";

class SearchBar extends Component {
  handleUpdate = () => {
    document.addEventListener("type", console.log(event.target));
  };
  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
