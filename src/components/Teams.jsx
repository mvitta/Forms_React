import { useTeams } from '../hooks/useTeams'
import { ItemList } from './ItemList'
import { SearchUrl } from './SearchUrl'
import styles from './Teams.module.css'
import { DotSpinner } from '@uiball/loaders'

function Loading() {
  return (
    <div className={styles.loading}>
      <DotSpinner size={40} speed={0.9} color='blue' />
    </div>
  )
}

export function Teams() {
  const url = 'https://free-nba.p.rapidapi.com/teams'
  const [teams, loading, err] = useTeams({ url })

  return (
    <>
      <h2>Teams NBA</h2>
      <article className={styles.articleTeams}>
        <div>
          <SearchUrl defaultUrl={url} />
        </div>
        <div className={styles.error}>{err}</div>
        <ol>
          {!loading ? (
            <Loading />
          ) : (
            teams.map((team, index) => {
              const { full_name } = team
              return (
                <ItemList
                  key={crypto.randomUUID()}
                  full_name={full_name}
                  index={index}
                />
              )
            })
          )}
        </ol>
      </article>
    </>
  )
}
