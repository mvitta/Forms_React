import { useEffect, useState, forwardRef, useContext } from 'react'
import context from '../context/Context.js'
import ThemeContext from '../context/ThemeContext.js'
import styles from './Search.module.css'

const Search = forwardRef(({}, ref) => {
  const [search, setSearch] = useState('')

  //we use the context and multiple context
  const theContext = useContext(context)
  console.log(theContext)

  const theme = useContext(ThemeContext)
  console.log(theme)

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
