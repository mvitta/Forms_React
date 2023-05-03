import Search from '../components/Search'
import styles from './PageSearch.module.css'
import { useRef } from 'react'

export function PageSearch() {
  //using hook useRef()
  //Controlling an input with a state variable
  const inputValue = useRef(null)

  function handleSubmit(e) {
    const data = inputValue.current.value
    console.log(data)
    e.preventDefault()
  }

  return (
    <form action='' className={styles.form_search} onSubmit={handleSubmit}>
      <label htmlFor='search'>
        <span>Search</span>
        <Search ref={inputValue} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}
