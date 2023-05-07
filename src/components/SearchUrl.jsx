import { useState } from 'react'
import { fetchTeams } from '../services/fetchTeams.js'
import styles from './SearchUrl.module.css'

export function SearchUrl({ defaultUrl }) {
  const [url, setUrl] = useState(defaultUrl)

  function handleSubmit(e) {
    fetchTeams(url).then((res) => console.log(res))
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor='searh-url'>
          <span>url</span>
          <input
            type='text'
            name='search-url'
            id='search-url'
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
            }}
          />
          <button type='submit' className={styles.button_earch_url}>
            search
          </button>
        </label>
      </form>
    </>
  )
}
