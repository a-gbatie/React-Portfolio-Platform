function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <label htmlFor="project-search">Search Projects</label>

      <input
        id="project-search"
        type="text"
        placeholder="Search projects by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;