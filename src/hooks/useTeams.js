import { useState, useEffect } from 'react'

export function useTeams({ url }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  // para codigo asincrono no funciona try catch
  // https://javascript.info/try-catch
  useEffect(
    function () {
      ;(async () => {
        const res = await fetch(url, {
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
          },
        })
        const data = await res.json()
        if (!res.ok) {
          const message = `${data.message}, HTTP ${res.status} - url: ${res.url}`
          setErr(message)
          throw message
        }

        setTeams(data.data)
        setLoading(true)

        console.log('finalizo try')
      })()

      return () => {
        setErr('')
        setLoading(false)
        setTeams([])
      }
    },
    [url]
  )

  return [teams, loading, err]
}
