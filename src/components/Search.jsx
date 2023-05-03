import { useEffect, useState, forwardRef } from 'react'

const Search = forwardRef((pops, ref) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

  function handleSearch(e) {
    const searchValue = e.target.value
    setSearch(searchValue)
  }

  return (
    <>
      <input
        ref={ref}
        type='text'
        name='search'
        id='search'
        value={search}
        onChange={handleSearch}
      />
    </>
  )
})

export default Search
