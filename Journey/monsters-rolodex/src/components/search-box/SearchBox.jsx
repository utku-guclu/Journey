import React, { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { searchField, onChangeHandler, placeholder, className } = this.props;
    return (
      <div>
        <input
          value={searchField}
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
