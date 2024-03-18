
const SearchItem = ({setSearch}) => {

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
    <input
className="form-control"
type="text"
placeholder="Search by item name..."
onChange={handleSearch}
/>
</>
  )
}

export default SearchItem