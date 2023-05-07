import { useTeams } from '../hooks/useTeams'
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
        <div className={styles.error}>{err}</div>
        <ol>
          {!loading ? (
            <Loading />
          ) : (
            teams.map((team) => {
              const { full_name } = team
              return <li key={crypto.randomUUID()}>{full_name}</li>
            })
          )}
        </ol>
      </article>
    </>
  )
}
