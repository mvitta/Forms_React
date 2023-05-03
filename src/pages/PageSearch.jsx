import Search from '../components/Search'
import styles from './PageSearch.module.css'
import { useContext, useRef } from 'react'
import context from '../context/Context.js'
import ThemeContext from '../context/ThemeContext.js'

export function PageSearch() {
  const { dark } = useContext(ThemeContext)
  //using hook useRef()
  //Control an input with a state variable from a parent container
  const inputValue = useRef(null)

  function handleSubmit(e) {
    const data = inputValue.current.value
    console.log(data)
    e.preventDefault()
  }

  return (
    <context.Provider value={{ usename: 'Mike', password: 12345 }}>
      <form className={styles.form_search} onSubmit={handleSubmit}>
        <label htmlFor='search'>
          <span>Search</span>
          <Search ref={inputValue} />
        </label>
        <button className={dark} type='submit'>
          Submit
        </button>
      </form>
    </context.Provider>
  )
}
