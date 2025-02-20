
const FilterCountry = ({search,setSearch,filter,setFilter,countries,setCountries}) => {

  const handleSort=(val)=>{
    const sortedCountry = [...countries].sort((a, b) => {
      return val === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
      });
      setCountries(sortedCountry)
  }
  return (
    <div className="options flex md:flex-row flex-col gap-4 justify-evenly">
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          className="px-2 py-1 text-xl bg-zinc-700 rounded-2xl"
        />
        <button onClick={()=>handleSort('asc')} className="px-5 lg:px-8 py-2 md:py-3 lg:text-2xl w-30 lg:w-50 self-end cursor-pointer bg-gray-800 hover:bg-gray-600 shadow-md shadow-gray-400 rounded-xl" >Asc.</button>
        <button onClick={()=>handleSort('desc')} className="px-5 lg:px-8 py-2 md:py-3 lg:text-2xl w-30 lg:w-50 self-end cursor-pointer bg-gray-800  hover:bg-gray-600 shadow-md shadow-gray-400 rounded-xl">Desc.</button>
        <select
          name="regions"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          id="regions"
          className="text-white bg-black px-2 rounded text-lg shadow-md shadow-zinc-600"
        >
          <option value="All">All</option>

          <option value="Asia">Asia</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
  )
}

export default FilterCountry
