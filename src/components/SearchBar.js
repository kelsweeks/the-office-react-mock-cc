function SearchBar({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
    </div>
  );
}

export default SearchBar;
