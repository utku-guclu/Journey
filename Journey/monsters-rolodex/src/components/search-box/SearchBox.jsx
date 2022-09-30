import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { searchField, onChangeHandler, placeholder, className } = this.props;
    return (
      <div>
        <input
          value={searchField}
          className={className}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
