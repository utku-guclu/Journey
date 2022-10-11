import "./search-box.styles.css";

const SearchBox = ({
  searchField,
  onChangeHandler,
  placeholder,
  className,
}) => {
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
};

export default SearchBox;
